package com.example.lernzettelapp.viewmodel

import androidx.lifecycle.ViewModel
import com.example.lernzettelapp.model.User
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class AuthViewModel : ViewModel() {
    private val auth = FirebaseAuth.getInstance()
    
    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    private val _error = MutableStateFlow<String?>(null)
    val error: StateFlow<String?> = _error.asStateFlow()

    init {
        auth.addAuthStateListener { firebaseAuth ->
            val firebaseUser = firebaseAuth.currentUser
            if (firebaseUser != null) {
                _currentUser.value = User(
                    id = firebaseUser.uid,
                    email = firebaseUser.email ?: "",
                    name = firebaseUser.displayName ?: firebaseUser.email?.substringBefore("@") ?: "User"
                )
            } else {
                _currentUser.value = null
            }
        }
    }

    fun login(email: String, password: String) {
        if (email.isEmpty() || password.isEmpty()) {
            _error.value = "Bitte gib E-Mail und Passwort ein"
            return
        }

        _isLoading.value = true
        _error.value = null
        
        auth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                _isLoading.value = false
                if (!task.isSuccessful) {
                    _error.value = task.exception?.localizedMessage ?: "Login fehlgeschlagen"
                }
            }
    }
    
    fun register(email: String, password: String) {
        if (email.isEmpty() || password.isEmpty()) {
            _error.value = "Bitte gib E-Mail und Passwort ein"
            return
        }

        _isLoading.value = true
        _error.value = null
        
        auth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener { task ->
                _isLoading.value = false
                if (!task.isSuccessful) {
                    _error.value = task.exception?.localizedMessage ?: "Registrierung fehlgeschlagen"
                }
            }
    }

    fun logout() {
        auth.signOut()
    }
}
