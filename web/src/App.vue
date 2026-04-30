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
    <div v-else class="app-container">
      <header class="glass">
        <h2>📚 Lernzettel</h2>

        <div class="search-bar">
          <input
            v-model="searchQuery"
            placeholder="Suchen..."
          />
        </div>

        <button @click="logout" title="Abmelden">🚪</button>
      </header>

      <main id="posts">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="card glass"
        >
          <div class="card-header">
            <h3>{{ post.title }}</h3>
            <span :class="['tag', post.tag]">{{ post.tag }}</span>
          </div>

          <div class="card-content" v-html="marked.parse(post.content || '')"></div>

          <div class="card-actions">
            <button @click="openLearningSystem(post)" title="Lernen">📖</button>
            <button @click="editPost(post)" title="Bearbeiten">✏️</button>
            <button @click="deletePost(post.id)" title="Löschen">🗑️</button>
          </div>
        </div>
      </main>

      <!-- LEARNING SYSTEM -->
      <LearningSystem
        v-if="showLearningSystem && selectedPost"
        :post="selectedPost"
        @close="closeLearningSystem"
      />

      <!-- FAB -->
      <button class="fab" @click="openModal" title="Neuer Lernzettel">+</button>

      <!-- MODAL -->
      <div :class="['modal', { hidden: !modalOpen }]">
        <div class="modal-content glass">
          <h3>{{ editingId ? 'Lernzettel bearbeiten' : 'Neuer Lernzettel' }}</h3>

          <input
            v-model="form.title"
            placeholder="Titel"
          />

          <select v-model="form.tag">
            <option>Deutsch</option>
            <option>Englisch</option>
            <option>Mathe</option>
            <option>Spanisch</option>
            <option>Physik</option>
            <option>Informatik</option>
            <option>Bio</option>
            <option>Geo</option>
            <option>Geschichte</option>
          </select>

          <div class="editor-container">
            <textarea
              v-model="form.content"
              placeholder="# Inhalt (Markdown unterstützt)"
            ></textarea>
          </div>

          <div class="modal-buttons">
            <button @click="savePost" class="primary-btn">Speichern</button>
            <button @click="closeModal">Abbrechen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { marked } from 'marked'
import { auth, db } from './firebase'
import LearningSystem from './LearningSystem.vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
  setDoc
} from 'firebase/firestore'

export default {
  name: 'App',
  components: {
    LearningSystem,
  },
  setup() {
    const user = ref(null)
    const email = ref('')
    const password = ref('')
    const posts = ref([])
    const searchQuery = ref('')
    const modalOpen = ref(false)
    const editingId = ref(null)
    const showLearningSystem = ref(false)
    const selectedPost = ref(null)
    const form = ref({
      title: '',
      content: '',
      tag: 'Deutsch',
    })

    const filteredPosts = computed(() => {
      let result = posts.value.filter(p => !p.isDeleted)

      if (!searchQuery.value.trim()) {
        return result
      }

      const q = searchQuery.value.toLowerCase()
      return result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.content.toLowerCase().includes(q) ||
          post.tag.toLowerCase().includes(q)
      )
    })

    async function register() {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
      } catch (e) {
        alert("Fehler: " + e.message)
      }
    }

    async function login() {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
      } catch (e) {
        alert("Login fehlgeschlagen: " + e.message)
      }
    }

    async function logout() {
      await signOut(auth)
    }

    function setupNotesListener(userId) {
      const q = query(collection(db, 'users', userId, 'notes'))

      return onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map(d => ({
          id: d.id,
          ...d.data()
        }))
      })
    }

    function openModal() {
      modalOpen.value = true
      editingId.value = null
      form.value = {
        title: '',
        content: '',
        tag: 'Deutsch',
      }
    }

    function closeModal() {
      modalOpen.value = false
    }

    async function savePost() {
      if (!form.value.title) return

      const userId = auth.currentUser.uid
      const noteId = editingId.value || Math.random().toString(36).substr(2, 9)

      // Wir speichern den Tag in Großbuchstaben für die Android Enum
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
      } catch (e) {
        console.error(e)
        alert(e.message)
      }
    }

    async function deletePost(id) {
      const userId = auth.currentUser.uid
      await updateDoc(doc(db, 'users', userId, 'notes', id), {
        isDeleted: true
      })
    }

    function editPost(post) {
      // Beim Bearbeiten den Tag wieder auf Title Case für das UI bringen
      const displayTag = post.tag.charAt(0) + post.tag.slice(1).toLowerCase()
      form.value = {
        title: post.title,
        content: post.content,
        tag: displayTag,
      }
      editingId.value = post.id
      modalOpen.value = true
    }

    function openLearningSystem(post) {
      selectedPost.value = post
      showLearningSystem.value = true
    }

    function closeLearningSystem() {
      showLearningSystem.value = false
      selectedPost.value = null
    }

    onMounted(() => {
      let unsubscribe = null
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        if (currentUser) {
          unsubscribe = setupNotesListener(currentUser.uid)
        } else {
          if (unsubscribe) unsubscribe()
          posts.value = []
        }
      })
    })

    return {
      user,
      email,
      password,
      searchQuery,
      modalOpen,
      editingId,
      showLearningSystem,
      selectedPost,
      form,
      filteredPosts,
      register,
      login,
      logout,
      openModal,
      closeModal,
      savePost,
      deletePost,
      editPost,
      openLearningSystem,
      closeLearningSystem,
      marked,
    }
  },
}
</script>
