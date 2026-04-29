package com.example.lernzettelapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.lernzettelapp.ui.screens.*
import com.example.lernzettelapp.ui.theme.LernzettelAppTheme
import com.example.lernzettelapp.viewmodel.AuthViewModel
import com.example.lernzettelapp.viewmodel.MainViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            LernzettelAppTheme {
                AppNavigation()
            }
        }
    }
}

@Composable
fun AppNavigation(
    viewModel: MainViewModel = viewModel(),
    authViewModel: AuthViewModel = viewModel()
) {
    val navController = rememberNavController()
    val studyNotes by viewModel.studyNotes.collectAsState()
    val currentUser by authViewModel.currentUser.collectAsState()

    LaunchedEffect(currentUser) {
        if (currentUser != null) {
            navController.navigate("notes") {
                popUpTo("login") { inclusive = true }
            }
        }
    }

    NavHost(
        navController = navController,
        startDestination = "login"
    ) {
        composable("login") {
            val error by authViewModel.error.collectAsState()
            LoginScreen(
                error = error,
                onLoginSuccess = { email, password ->
                    authViewModel.login(email, password)
                },
                onRegister = { email, password ->
                    authViewModel.register(email, password)
                }
            )
        }
        composable("notes") {
            StudyNotesScreen(
                notes = studyNotes,
                onAddNote = { navController.navigate("edit_note") },
                onEditNote = { note -> navController.navigate("edit_note/${note.id}") },
                onDeleteNote = { note -> viewModel.deleteStudyNote(note.id) },
                onToggleFinished = { note -> viewModel.toggleFinished(note.id) },
                onOpenTrash = { navController.navigate("trash") },
                onLogout = {
                    authViewModel.logout()
                    navController.navigate("login") {
                        popUpTo(0)
                    }
                }
            )
        }
        composable("edit_note") {
            EditNoteScreen(
                onSave = { title, content, tag ->
                    viewModel.addStudyNote(title, content, tag)
                    navController.popBackStack()
                },
                onBack = { navController.popBackStack() }
            )
        }
        composable("edit_note/{noteId}") { backStackEntry ->
            val noteId = backStackEntry.arguments?.getString("noteId")
            val note = studyNotes.find { it.id == noteId }
            if (note != null) {
                EditNoteScreen(
                    initialTitle = note.title,
                    initialContent = note.content,
                    initialTag = note.tag,
                    onSave = { title, content, tag ->
                        viewModel.updateStudyNote(note.id, title, content, tag)
                        navController.popBackStack()
                    },
                    onBack = { navController.popBackStack() }
                )
            }
        }
        composable("trash") {
            TrashScreen(
                deletedNotes = studyNotes.filter { it.isDeleted },
                onRestore = { viewModel.restoreStudyNote(it.id) },
                onDeletePermanently = { viewModel.permanentlyDeleteStudyNote(it.id) },
                onBack = { navController.popBackStack() }
            )
        }
    }
}
