# Lernzettel - Vue 3 + Vite + Firebase

Study notes app with Markdown editor and Firebase backend.

## Project Setup

### Install dependencies

```bash
npm install
```

### Development Server

Start the Vite development server:

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder for deployment.

### Preview Production Build

```bash
npm run preview
```

## Features

- 🔐 Firebase Authentication (Email/Password)
- 📝 Markdown Editor with Live Preview
- 🏷️ Subject Tags (Deutsch, Englisch, Mathe, etc.)
- 🔍 Search Functionality
- ✏️ Edit & Delete Notes
- 🎨 Beautiful Glass-morphism UI
- ⚡ Vite for Fast Development

## Project Structure

```
src/
├── App.vue          # Main Vue component
├── main.js          # Entry point
├── firebase.js      # Firebase configuration
└── style.css        # Global styles
```

## Tech Stack

- Vue 3 (Composition API)
- Vite
- Firebase (Auth + Firestore)
- Marked (Markdown parser)
