package com.example.lernzettelapp.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.lernzettelapp.model.*
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ListenerRegistration
import com.google.firebase.firestore.Query
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class MainViewModel : ViewModel() {
    private val db = FirebaseFirestore.getInstance()
    private val auth = FirebaseAuth.getInstance()
    private var notesListener: ListenerRegistration? = null
    
    private val _studyNotes = MutableStateFlow<List<StudyNote>>(emptyList())
    val studyNotes: StateFlow<List<StudyNote>> = _studyNotes.asStateFlow()

    private val _isRefreshing = MutableStateFlow(false)
    val isRefreshing: StateFlow<Boolean> = _isRefreshing.asStateFlow()

    init {
        auth.addAuthStateListener { firebaseAuth ->
            val userId = firebaseAuth.currentUser?.uid
            if (userId != null) {
                observeNotes(userId)
            } else {
                notesListener?.remove()
                _studyNotes.value = emptyList()
            }
        }
    }

    fun refresh() {
        viewModelScope.launch {
            _isRefreshing.value = true
            val userId = auth.currentUser?.uid
            if (userId != null) {
                observeNotes(userId)
            }
            delay(1000) // Kleine Verzögerung für das UI-Feeling
            _isRefreshing.value = false
        }
    }

    private fun observeNotes(userId: String) {
        notesListener?.remove()
        
        notesListener = db.collection("users").document(userId).collection("notes")
            .addSnapshotListener { snapshot, e ->
                if (e != null || snapshot == null) return@addSnapshotListener
                
                val notes = snapshot.documents.mapNotNull { doc ->
                    try {
                        val tagStr = doc.getString("tag") ?: SubjectTag.DEUTSCH.name
                        // Robustes Mapping für Tags (case-insensitive)
                        val tag = SubjectTag.entries.find { it.name.equals(tagStr, ignoreCase = true) || it.label.equals(tagStr, ignoreCase = true) } 
                                 ?: SubjectTag.DEUTSCH

                        StudyNote(
                            id = doc.getString("id") ?: doc.id,
                            title = doc.getString("title") ?: "",
                            content = doc.getString("content") ?: "",
                            tag = tag,
                            isDeleted = doc.getBoolean("isDeleted") ?: false,
                            isFinished = doc.getBoolean("isFinished") ?: false
                        )
                    } catch (ex: Exception) {
                        null
                    }
                }
                _studyNotes.value = notes
            }
    }

    override fun onCleared() {
        super.onCleared()
        notesListener?.remove()
    }

    fun addStudyNote(title: String, content: String, tag: SubjectTag) {
        val userId = auth.currentUser?.uid ?: return
        val note = StudyNote(title = title, content = content, tag = tag)
        val noteMap = hashMapOf(
            "id" to note.id,
            "title" to note.title,
            "content" to note.content,
            "tag" to note.tag.name,
            "isDeleted" to note.isDeleted,
            "isFinished" to note.isFinished
        )
        db.collection("users").document(userId).collection("notes")
            .document(note.id).set(noteMap)
    }

    fun updateStudyNote(id: String, title: String, content: String, tag: SubjectTag) {
        val userId = auth.currentUser?.uid ?: return
        val updates = hashMapOf<String, Any>(
            "title" to title,
            "content" to content,
            "tag" to tag.name
        )
        db.collection("users").document(userId).collection("notes")
            .document(id).update(updates)
    }

    fun deleteStudyNote(id: String) {
        val userId = auth.currentUser?.uid ?: return
        db.collection("users").document(userId).collection("notes")
            .document(id).update("isDeleted", true)
    }

    fun restoreStudyNote(id: String) {
        val userId = auth.currentUser?.uid ?: return
        db.collection("users").document(userId).collection("notes")
            .document(id).update("isDeleted", false)
    }

    fun toggleFinished(id: String) {
        val userId = auth.currentUser?.uid ?: return
        val note = _studyNotes.value.find { it.id == id } ?: return
        db.collection("users").document(userId).collection("notes")
            .document(id).update("isFinished", !note.isFinished)
    }

    fun permanentlyDeleteStudyNote(id: String) {
        val userId = auth.currentUser?.uid ?: return
        db.collection("users").document(userId).collection("notes")
            .document(id).delete()
    }
}
