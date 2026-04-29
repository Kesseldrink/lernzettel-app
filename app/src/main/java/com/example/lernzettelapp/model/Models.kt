package com.example.lernzettelapp.model

import androidx.compose.ui.graphics.Color

data class VocabularyCard(
    val id: String = java.util.UUID.randomUUID().toString(),
    val frontText: String,
    val backText: String
)

data class VocabularyPage(
    val id: String = java.util.UUID.randomUUID().toString(),
    val name: String,
    val cards: List<VocabularyCard> = emptyList()
)

data class VocabularyGroup(
    val id: String = java.util.UUID.randomUUID().toString(),
    val language: String,
    val gradeLevel: String,
    val pages: List<VocabularyPage> = emptyList()
)

enum class SubjectTag(val label: String, val color: Color) {
    DEUTSCH("Deutsch", Color.Red),
    ENGLISCH("Englisch", Color.Blue),
    MATHE("Mathe", Color.Yellow),
    SPANISCH("Spanisch", Color(0xFFFFC0CB)), // Pink
    PHYSIK("Physik", Color(0xFF8B4513)), // Brown
    INFORMATIK("Informatik", Color.Gray),
    BIO("Bio", Color.Green),
    GEO("Geo", Color(0xFFFFA500)), // Orange
    GESCHICHTE("Geschichte", Color(0xFF800080)) // Purple
}

data class StudyNote(
    val id: String = java.util.UUID.randomUUID().toString(),
    val title: String,
    val content: String,
    val tag: SubjectTag,
    val isDeleted: Boolean = false,
    val isFinished: Boolean = false
)

data class User(
    val id: String,
    val email: String,
    val name: String
)
