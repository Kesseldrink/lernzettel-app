package com.example.lernzettelapp.ui.screens

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.lernzettelapp.model.StudyNote
import com.example.lernzettelapp.ui.theme.DarkBackground
import com.example.lernzettelapp.ui.theme.GlassBorder
import com.example.lernzettelapp.ui.theme.GlassSurface

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TrashScreen(
    deletedNotes: List<StudyNote>,
    onRestore: (StudyNote) -> Unit,
    onDeletePermanently: (StudyNote) -> Unit,
    onBack: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(DarkBackground, Color(0xFF1A1A2E))
                )
            )
    ) {
        Scaffold(
            containerColor = Color.Transparent,
            topBar = {
                TopAppBar(
                    title = { Text("Papierkorb", color = Color.White) },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color.Transparent),
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            Text("<", color = Color.White)
                        }
                    }
                )
            }
        ) { padding ->
            if (deletedNotes.isEmpty()) {
                Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Text("Der Papierkorb ist leer", color = Color.White.copy(alpha = 0.5f))
                }
            } else {
                LazyColumn(modifier = Modifier.padding(padding)) {
                    items(deletedNotes) { note ->
                        TrashItem(note, onRestore = { onRestore(note) }, onDelete = { onDeletePermanently(note) })
                    }
                }
            }
        }
    }
}

@Composable
fun TrashItem(note: StudyNote, onRestore: () -> Unit, onDelete: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        colors = CardDefaults.cardColors(containerColor = GlassSurface),
        border = BorderStroke(1.dp, GlassBorder)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = note.title, modifier = Modifier.weight(1f), color = Color.White)
            IconButton(onClick = onRestore) {
                Icon(Icons.Default.Refresh, contentDescription = "Wiederherstellen", tint = Color.White)
            }
            IconButton(onClick = onDelete) {
                Icon(Icons.Default.Delete, contentDescription = "Endgültig löschen", tint = Color.Red.copy(alpha = 0.7f))
            }
        }
    }
}
