package com.example.lernzettelapp.api

import com.example.lernzettelapp.model.StudyNote
import com.example.lernzettelapp.model.User

/**
 * Interface für das Backend. 
 * Hier können später Retrofit oder Ktor Implementationen hinzugefügt werden.
 */
interface ApiService {
    suspend fun login(email: String, password: String): User
    suspend fun getStudyNotes(): List<StudyNote>
    suspend fun saveStudyNote(note: StudyNote)
    suspend fun deleteStudyNote(id: String)
}
