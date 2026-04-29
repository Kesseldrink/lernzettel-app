package com.example.lernzettelapp.ui.components

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.lernzettelapp.ui.theme.GlassBorder
import com.example.lernzettelapp.ui.theme.GlassSurface

@Composable
fun GlassTextField(
    value: String,
    onValueChange: (String) -> Unit,
    label: String,
    modifier: Modifier = Modifier,
    singleLine: Boolean = true
) {
    Surface(
        modifier = modifier,
        color = GlassSurface,
        shape = MaterialTheme.shapes.medium,
        border = BorderStroke(1.dp, GlassBorder)
    ) {
        TextField(
            value = value,
            onValueChange = onValueChange,
            placeholder = { Text(label, color = Color.White.copy(alpha = 0.5f)) },
            colors = TextFieldDefaults.colors(
                focusedContainerColor = Color.Transparent,
                unfocusedContainerColor = Color.Transparent,
                disabledContainerColor = Color.Transparent,
                focusedIndicatorColor = Color.Transparent,
                unfocusedIndicatorColor = Color.Transparent,
                cursorColor = Color.White,
                focusedTextColor = Color.White,
                unfocusedTextColor = Color.White
            ),
            modifier = Modifier.fillMaxWidth(),
            singleLine = singleLine
        )
    }
}
