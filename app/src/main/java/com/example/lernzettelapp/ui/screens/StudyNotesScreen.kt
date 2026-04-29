package com.example.lernzettelapp.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateContentSize
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ExitToApp
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import com.example.lernzettelapp.model.StudyNote
import com.example.lernzettelapp.model.SubjectTag
import com.example.lernzettelapp.ui.theme.DarkBackground
import com.example.lernzettelapp.ui.theme.GlassBorder
import com.example.lernzettelapp.ui.theme.GlassSurface
import com.example.lernzettelapp.utils.PdfGenerator

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudyNotesScreen(
    notes: List<StudyNote>,
    onAddNote: () -> Unit,
    onEditNote: (StudyNote) -> Unit,
    onDeleteNote: (StudyNote) -> Unit,
    onToggleFinished: (StudyNote) -> Unit,
    onOpenTrash: () -> Unit,
    onLogout: () -> Unit
) {
    val context = LocalContext.current
    var selectedFilter by remember { mutableStateOf<SubjectTag?>(null) }
    var searchQuery by remember { mutableStateOf("") }
    var selectedNoteId by remember { mutableStateOf<String?>(null) }

    val filteredNotes = remember(notes, selectedFilter, searchQuery) {
        notes.filter { !it.isDeleted }
            .filter { note ->
                selectedFilter == null || note.tag == selectedFilter
            }
            .filter { note ->
                searchQuery.isEmpty() || 
                note.title.contains(searchQuery, ignoreCase = true) || 
                note.content.contains(searchQuery, ignoreCase = true)
            }
    }

    val selectedNote = remember(selectedNoteId, notes) {
        notes.find { it.id == selectedNoteId }
    }

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
                    title = { Text("Lernzettel", color = Color.White) },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color.Transparent),
                    actions = {
                        IconButton(onClick = onOpenTrash) {
                            Icon(Icons.Default.Delete, contentDescription = "Papierkorb", tint = Color.White)
                        }
                        IconButton(onClick = onLogout) {
                            Icon(Icons.AutoMirrored.Filled.ExitToApp, contentDescription = "Logout", tint = Color.White)
                        }
                    }
                )
            },
            floatingActionButton = {
                if (selectedNoteId == null) {
                    FloatingActionButton(
                        onClick = onAddNote,
                        containerColor = Color(0x4DFFFFFF),
                        contentColor = Color.White
                    ) {
                        Icon(Icons.Default.Add, contentDescription = "Zettel hinzufügen")
                    }
                }
            },
            bottomBar = {
                AnimatedVisibility(
                    visible = selectedNoteId != null,
                    enter = fadeIn(),
                    exit = fadeOut()
                ) {
                    BottomAppBar(
                        containerColor = Color(0xCC12121A),
                        contentColor = Color.White,
                        modifier = Modifier
                            .padding(16.dp)
                            .height(70.dp)
                            .background(GlassSurface, shape = MaterialTheme.shapes.large)
                            .border(1.dp, GlassBorder, shape = MaterialTheme.shapes.large),
                        tonalElevation = 0.dp
                    ) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceAround,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            IconButton(onClick = { 
                                selectedNote?.let { 
                                    PdfGenerator(context, it).print()
                                }
                                selectedNoteId = null
                            }) {
                                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                    Icon(Icons.Default.Share, contentDescription = "Drucken")
                                    Text("PDF", style = MaterialTheme.typography.labelSmall)
                                }
                            }
                            IconButton(onClick = { 
                                selectedNote?.let { onEditNote(it) }
                                selectedNoteId = null
                            }) {
                                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                    Icon(Icons.Default.Edit, contentDescription = "Bearbeiten")
                                    Text("Edit", style = MaterialTheme.typography.labelSmall)
                                }
                            }
                            IconButton(onClick = {
                                selectedNote?.let { onToggleFinished(it) }
                                selectedNoteId = null
                            }) {
                                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                    Icon(
                                        if (selectedNote?.isFinished == true) Icons.Default.Close else Icons.Default.Check,
                                        contentDescription = "Fertig"
                                    )
                                    Text(
                                        if (selectedNote?.isFinished == true) "Reset" else "Fertig",
                                        style = MaterialTheme.typography.labelSmall
                                    )
                                }
                            }
                        }
                    }
                }
            }
        ) { padding ->
            Column(modifier = Modifier.padding(padding)) {
                // Search Bar
                Surface(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 8.dp),
                    color = GlassSurface,
                    shape = MaterialTheme.shapes.medium,
                    border = BorderStroke(1.dp, GlassBorder)
                ) {
                    TextField(
                        value = searchQuery,
                        onValueChange = { searchQuery = it },
                        placeholder = { Text("Suchen...", color = Color.White.copy(alpha = 0.5f)) },
                        leadingIcon = { Icon(Icons.Default.Search, contentDescription = null, tint = Color.White.copy(alpha = 0.5f)) },
                        colors = TextFieldDefaults.colors(
                            focusedContainerColor = Color.Transparent,
                            unfocusedContainerColor = Color.Transparent,
                            focusedIndicatorColor = Color.Transparent,
                            unfocusedIndicatorColor = Color.Transparent,
                            focusedTextColor = Color.White,
                            unfocusedTextColor = Color.White,
                            cursorColor = Color.White
                        ),
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true
                    )
                }

                // Filter Row
                LazyRow(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 8.dp),
                    contentPadding = PaddingValues(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    item {
                        FilterChip(
                            selected = selectedFilter == null,
                            onClick = { selectedFilter = null },
                            label = { Text("Alle") },
                            colors = FilterChipDefaults.filterChipColors(
                                labelColor = Color.White,
                                selectedLabelColor = Color.Black,
                                selectedContainerColor = Color.White
                            )
                        )
                    }
                    items(SubjectTag.entries) { tag ->
                        FilterChip(
                            selected = selectedFilter == tag,
                            onClick = { selectedFilter = tag },
                            label = { Text(tag.label) },
                            colors = FilterChipDefaults.filterChipColors(
                                labelColor = tag.color,
                                selectedLabelColor = Color.Black,
                                selectedContainerColor = tag.color
                            )
                        )
                    }
                }

                LazyColumn(
                    modifier = Modifier.fillMaxSize()
                ) {
                    items(filteredNotes) { note ->
                        NoteItem(
                            note = note,
                            isSelected = selectedNoteId == note.id,
                            onToggleSelection = {
                                selectedNoteId = if (selectedNoteId == note.id) null else note.id
                            },
                            onEdit = { onEditNote(note) },
                            onDelete = { onDeleteNote(note) }
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun NoteItem(
    note: StudyNote, 
    isSelected: Boolean,
    onToggleSelection: () -> Unit,
    onEdit: () -> Unit, 
    onDelete: () -> Unit
) {
    var expanded by remember { mutableStateOf(false) }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp)
            .animateContentSize()
            .combinedClickable(
                onClick = { 
                    if (!isSelected) expanded = !expanded 
                },
                onDoubleClick = onToggleSelection,
                onLongClick = onToggleSelection
            ),
        colors = CardDefaults.cardColors(
            containerColor = if (isSelected) Color(0x4DFFFFFF) else GlassSurface
        ),
        border = BorderStroke(
            if (isSelected) 2.dp else 1.dp, 
            if (isSelected) Color.White else GlassBorder
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 0.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier.fillMaxWidth()
            ) {
                Box(
                    modifier = Modifier
                        .size(12.dp)
                        .background(note.tag.color, shape = MaterialTheme.shapes.small)
                )
                Spacer(modifier = Modifier.width(16.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = note.title, 
                        fontWeight = FontWeight.Bold, 
                        color = Color.White,
                        textDecoration = if (note.isFinished) TextDecoration.LineThrough else null
                    )
                    Text(
                        text = note.tag.label,
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.White.copy(alpha = 0.7f)
                    )
                }
                
                if (note.isFinished) {
                    Icon(
                        Icons.Default.CheckCircle, 
                        contentDescription = "Erledigt", 
                        tint = Color.Green,
                        modifier = Modifier.padding(end = 8.dp)
                    )
                }

                IconButton(onClick = onDelete) {
                    Icon(Icons.Default.Delete, contentDescription = "Löschen", tint = Color.White.copy(alpha = 0.5f))
                }
            }

            AnimatedVisibility(visible = expanded) {
                Column {
                    HorizontalDivider(
                        modifier = Modifier.padding(vertical = 12.dp),
                        color = GlassBorder
                    )
                    Text(
                        text = note.content,
                        color = Color.White.copy(alpha = 0.9f),
                        style = MaterialTheme.typography.bodyMedium
                    )
                }
            }
        }
    }
}
