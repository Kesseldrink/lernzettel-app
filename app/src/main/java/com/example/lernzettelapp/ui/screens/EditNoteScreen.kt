package com.example.lernzettelapp.ui.screens

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.lernzettelapp.model.SubjectTag
import com.example.lernzettelapp.ui.components.GlassTextField
import com.example.lernzettelapp.ui.theme.DarkBackground
import com.example.lernzettelapp.ui.theme.GlassBorder
import com.example.lernzettelapp.ui.theme.GlassSurface

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EditNoteScreen(
    initialTitle: String = "",
    initialContent: String = "",
    initialTag: SubjectTag = SubjectTag.DEUTSCH,
    onSave: (String, String, SubjectTag) -> Unit,
    onBack: () -> Unit
) {
    var title by remember { mutableStateOf(initialTitle) }
    var content by remember { mutableStateOf(initialContent) }
    var selectedTag by remember { mutableStateOf(initialTag) }

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
                    title = { Text(if (initialTitle.isEmpty()) "Neuer Lernzettel" else "Bearbeiten", color = Color.White) },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color.Transparent),
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            Text("<", color = Color.White)
                        }
                    },
                    actions = {
                        TextButton(onClick = { onSave(title, content, selectedTag) }) {
                            Text("Speichern", color = Purple80)
                        }
                    }
                )
            }
        ) { padding ->
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding)
                    .padding(16.dp)
            ) {
                GlassTextField(
                    value = title,
                    onValueChange = { title = it },
                    label = "Titel",
                    modifier = Modifier.fillMaxWidth()
                )
                
                Spacer(modifier = Modifier.height(16.dp))
                
                Text("Fach auswählen:", style = MaterialTheme.typography.labelLarge, color = Color.White)
                LazyRow(modifier = Modifier.padding(vertical = 8.dp)) {
                    items(SubjectTag.entries) { tag ->
                        Box(
                            modifier = Modifier
                                .padding(4.dp)
                                .size(40.dp)
                                .background(tag.color, shape = MaterialTheme.shapes.medium)
                                .clickable { selectedTag = tag }
                                .border(
                                    if (selectedTag == tag) BorderStroke(2.dp, Color.White) 
                                    else BorderStroke(0.dp, Color.Transparent),
                                    shape = MaterialTheme.shapes.medium
                                ),
                            contentAlignment = Alignment.Center
                        ) {
                            if (selectedTag == tag) {
                                Text("✓", color = Color.White)
                            }
                        }
                    }
                }
                Text(text = "Gewählt: ${selectedTag.label}", color = Color.White.copy(alpha = 0.7f))
                
                Spacer(modifier = Modifier.height(16.dp))
                
                GlassTextField(
                    value = content,
                    onValueChange = { content = it },
                    label = "Inhalt",
                    modifier = Modifier
                        .fillMaxWidth()
                        .weight(1f),
                    singleLine = false
                )
            }
        }
    }
}

private val Purple80 = Color(0xFFD0BCFF)
