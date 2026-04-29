package com.example.lernzettelapp.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.lernzettelapp.ui.components.GlassTextField
import com.example.lernzettelapp.ui.theme.DarkBackground

@Composable
fun LoginScreen(
    error: String? = null,
    onLoginSuccess: (String, String) -> Unit,
    onRegister: (String, String) -> Unit
) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(DarkBackground, Color(0xFF1A1A2E))
                )
            ),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .padding(32.dp)
                .fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Lernzettel App",
                fontSize = 32.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White,
                modifier = Modifier.padding(bottom = 8.dp)
            )
            Text(
                text = "Willkommen",
                fontSize = 16.sp,
                color = Color.White.copy(alpha = 0.7f),
                modifier = Modifier.padding(bottom = 24.dp)
            )

            if (error != null) {
                Text(
                    text = error,
                    color = Color.Red,
                    fontSize = 14.sp,
                    modifier = Modifier.padding(bottom = 16.dp)
                )
            }

            GlassTextField(
                value = email,
                onValueChange = { email = it },
                label = "E-Mail",
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(16.dp))

            GlassTextField(
                value = password,
                onValueChange = { password = it },
                label = "Passwort",
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(32.dp))

            Button(
                onClick = { onLoginSuccess(email, password) },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0x4DFFFFFF),
                    contentColor = Color.White
                ),
                shape = MaterialTheme.shapes.medium
            ) {
                Text("Anmelden", fontSize = 18.sp)
            }

            Spacer(modifier = Modifier.height(16.dp))

            TextButton(onClick = { onRegister(email, password) }) {
                Text("Account erstellen", color = Color.White.copy(alpha = 0.7f))
            }
        }
    }
}
