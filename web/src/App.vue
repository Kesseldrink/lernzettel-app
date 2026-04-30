<template>
  <div>
    <!-- AUTH SCREEN -->
    <div v-if="!user" class="auth-screen">
      <div class="auth-container glass">
        <h2>Lernzettel App</h2>
        <p>Willkommen zurück</p>

        <input
          v-model="email"
          placeholder="E-Mail"
          @keyup.enter="login"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Passwort"
          @keyup.enter="login"
        />

        <div class="auth-buttons">
          <button @click="login">Anmelden</button>
          <button @click="register" class="text-btn">Account erstellen</button>
        </div>
      </div>
    </div>

    <!-- MAIN APP -->
    <div v-else class="app-container no-print">
      <header class="glass">
        <div class="header-left">
          <h2>📚 Lernzettel</h2>
        </div>

        <div class="search-bar">
          <input
            v-model="searchQuery"
            placeholder="Suchen..."
          />
        </div>

        <div class="header-actions">
          <button @click="showTrash = !showTrash" :class="{ 'active-trash': showTrash }" :title="showTrash ? 'Zettel anzeigen' : 'Papierkorb'">
            {{ showTrash ? '📋' : '🗑️' }}
          </button>
          <button @click="logout" title="Abmelden">🚪</button>
        </div>
      </header>

      <div class="view-title">
        <h3>{{ showTrash ? 'Papierkorb' : 'Deine Lernzettel' }}</h3>
      </div>

      <main id="posts">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="card glass clickable"
          @click="viewPost(post)"
        >
          <div class="card-header">
            <h3 class="truncate">{{ post.title }}</h3>
            <span :class="['tag', post.tag]">{{ post.tag }}</span>
          </div>

          <div class="card-content preview-text">
             <div v-html="marked.parse(post.content || '')"></div>
          </div>

          <div class="card-actions" @click.stop>
            <template v-if="!showTrash">
              <button @click="printPost(post)" title="Drucken">🖨️</button>
              <button @click="editPost(post)" title="Bearbeiten">✏️</button>
              <button @click="deletePost(post.id)" title="In Papierkorb">🗑️</button>
            </template>
            <template v-else>
              <button @click="restorePost(post.id)" title="Wiederherstellen">🔄</button>
              <button @click="permanentlyDeletePost(post.id)" class="danger-btn" title="Löschen">❌</button>
            </template>
          </div>
        </div>
      </main>

      <!-- DETAIL VIEW MODAL -->
      <div v-if="selectedViewPost" class="modal" @click="selectedViewPost = null">
        <div class="modal-content glass detail-view" @click.stop>
          <div class="detail-header">
            <div class="detail-header-left">
                <button class="icon-close-btn" @click="selectedViewPost = null">✕</button>
                <h2>{{ selectedViewPost.title }}</h2>
            </div>
            <div class="detail-header-right">
                <span :class="['tag', selectedViewPost.tag]">{{ selectedViewPost.tag }}</span>
                <button @click="printPost(selectedViewPost)" title="Drucken">🖨️</button>
            </div>
          </div>
          <hr class="divider">
          <div class="detail-body" v-html="marked.parse(selectedViewPost.content || '')"></div>
        </div>
      </div>

      <!-- FAB -->
      <button v-if="!showTrash" class="fab" @click="openModal" title="Neuer Lernzettel">+</button>

      <!-- EDIT MODAL -->
      <div :class="['modal', { hidden: !modalOpen }]">
        <div class="modal-content glass">
          <h3>{{ editingId ? 'Lernzettel bearbeiten' : 'Neuer Lernzettel' }}</h3>
          <input v-model="form.title" placeholder="Titel" />
          <select v-model="form.tag">
            <option>Deutsch</option><option>Englisch</option><option>Mathe</option>
            <option>Spanisch</option><option>Physik</option><option>Informatik</option>
            <option>Bio</option><option>Geo</option><option>Geschichte</option>
          </select>
          <div class="editor-container">
            <textarea v-model="form.content" placeholder="# Inhalt"></textarea>
          </div>
          <div class="modal-buttons">
            <button @click="savePost" class="primary-btn">Speichern</button>
            <button @click="closeModal">Abbrechen</button>
          </div>
        </div>
      </div>
    </div>

    <!-- PRINT AREA -->
    <div id="print-area" class="print-only">
      <div v-if="postToPrint" class="print-container">
        <h1>{{ postToPrint.title }}</h1>
        <div class="print-tag">Fach: {{ postToPrint.tag }}</div>
        <hr>
        <div v-html="marked.parse(postToPrint.content || '')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, nextTick } from 'vue'
import { marked } from 'marked'
import { auth, db } from './firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  collection,
  updateDoc,
  doc,
  query,
  onSnapshot,
  setDoc,
  deleteDoc
} from 'firebase/firestore'

export default {
  name: 'App',
  setup() {
    const user = ref(null)
    const email = ref('')
    const password = ref('')
    const posts = ref([])
    const searchQuery = ref('')
    const modalOpen = ref(false)
    const editingId = ref(null)
    const showTrash = ref(false)
    const selectedViewPost = ref(null)
    const postToPrint = ref(null)
    const form = ref({
      title: '',
      content: '',
      tag: 'Deutsch',
    })

    const filteredPosts = computed(() => {
      let result = posts.value.filter(p => showTrash.value ? p.isDeleted : !p.isDeleted)
      if (!searchQuery.value.trim()) return result
      const q = searchQuery.value.toLowerCase()
      return result.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q))
    })

    async function register() { try { await createUserWithEmailAndPassword(auth, email.value, password.value) } catch (e) { alert(e.message) } }
    async function login() { try { await signInWithEmailAndPassword(auth, email.value, password.value) } catch (e) { alert(e.message) } }
    async function logout() { await signOut(auth) }

    function setupNotesListener(userId) {
      const q = query(collection(db, 'users', userId, 'notes'))
      return onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
      })
    }

    function viewPost(post) {
      selectedViewPost.value = post
    }

    async function printPost(post) {
      postToPrint.value = post
      await nextTick()
      window.print()
      postToPrint.value = null
    }

    function openModal() {
      modalOpen.value = true
      editingId.value = null
      form.value = { title: '', content: '', tag: 'Deutsch' }
    }

    function closeModal() { modalOpen.value = false }

    async function savePost() {
      if (!form.value.title) return
      const userId = auth.currentUser.uid
      const noteId = editingId.value || Math.random().toString(36).substr(2, 9)
      const noteData = {
        title: form.value.title,
        content: form.value.content,
        tag: form.value.tag.toUpperCase(),
        isDeleted: false,
        isFinished: false,
        id: noteId
      }
      try {
        await setDoc(doc(db, 'users', userId, 'notes', noteId), noteData)
        closeModal()
      } catch (e) { alert(e.message) }
    }

    async function deletePost(id) {
      await updateDoc(doc(db, 'users', auth.currentUser.uid, 'notes', id), { isDeleted: true })
    }

    async function restorePost(id) {
      await updateDoc(doc(db, 'users', auth.currentUser.uid, 'notes', id), { isDeleted: false })
    }

    async function permanentlyDeletePost(id) {
      if (confirm("Endgültig löschen?")) {
        await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'notes', id))
      }
    }

    function editPost(post) {
      const displayTag = post.tag.charAt(0) + post.tag.slice(1).toLowerCase()
      form.value = { title: post.title, content: post.content, tag: displayTag }
      editingId.value = post.id
      modalOpen.value = true
    }

    onMounted(() => {
      let unsubscribe = null
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        if (currentUser) { unsubscribe = setupNotesListener(currentUser.uid) }
        else { if (unsubscribe) unsubscribe(); posts.value = [] }
      })
    })

    return {
      user, email, password, searchQuery, modalOpen, editingId,
      showTrash, selectedViewPost, postToPrint, form, filteredPosts, register, login, logout,
      openModal, closeModal, savePost, deletePost, restorePost, permanentlyDeletePost,
      editPost, viewPost, printPost, marked
    }
  }
}
</script>

<style>
/* ... (vorherige Styles bleiben) */
#posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  height: 250px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.card.clickable:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.preview-text {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  overflow: hidden;
}

.detail-view {
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  padding: 30px;
  overflow-y: auto;
  position: relative;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.detail-header-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.icon-close-btn {
    background: transparent !important;
    border: none !important;
    font-size: 28px;
    color: rgba(255,255,255,0.6);
    padding: 0;
    margin: 0;
    line-height: 1;
    cursor: pointer;
}

.icon-close-btn:hover {
    color: white;
}

.divider {
  border: 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin: 20px 0;
}

.active-trash { background: rgba(255, 0, 0, 0.2) !important; }
.danger-btn:hover { background: rgba(255, 0, 0, 0.4) !important; }
.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* PRINT STYLES */
@media print {
  .no-print {
    display: none !important;
  }
  .print-only {
    display: block !important;
    color: black !important;
    background: white !important;
  }
  body {
    background: white !important;
    color: black !important;
  }
  .print-container {
    padding: 20px;
  }
  .print-tag {
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.print-only {
  display: none;
}
</style>
