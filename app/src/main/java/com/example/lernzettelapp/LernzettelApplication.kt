package com.example.lernzettelapp

import android.app.Application
import com.google.firebase.FirebaseApp

class LernzettelApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        FirebaseApp.initializeApp(this)
    }
}
