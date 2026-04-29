package com.example.lernzettelapp.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.lernzettelapp.model.*
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class MainViewModel : ViewModel() {
    private val db = FirebaseFirestore.getInstance()
    private val auth = FirebaseAuth.getInstance()
    
    private val _studyNotes = MutableStateFlow<List<StudyNote>>(emptyList())
    val studyNotes: StateFlow<List<StudyNote>> = _studyNotes.asStateFlow()

    init {
        observeNotes()
    }

    private fun observeNotes() {
        val userId = auth.currentUser?.uid ?: return
        db.collection("users").document(userId).collection("notes")
            .orderBy("id", Query.Direction.DESCENDING)
            .addSnapshotListener { snapshot, e ->
                if (e != null || snapshot == null) return@addSnapshotListener
                
                val notes = snapshot.documents.mapNotNull { doc ->
                    try {
                        StudyNote(
                            id = doc.getString("id") ?: doc.id,
                            title = doc.getString("title") ?: "",
                            content = doc.getString("content") ?: "",
                            tag = SubjectTag.valueOf(doc.getString("tag") ?: SubjectTag.DEUTSCH.name),
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
