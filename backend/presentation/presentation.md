# Marhba Authentication System - Application Presentation

## 🚀 Overview
**Marhba Auth** is a secure, modern full-stack authentication system comprising a Node.js/Express backend server and a cross-platform React Native/Expo mobile application. It features robust user signup, login, session retention, and dynamic responsive layouts.

---

## 🛠️ Technology Stack

### 📂 Backend
- **Node.js & Express.js**: High-performance backend routing and middleware framework.
- **Sequelize ORM**: Promise-based Node.js ORM used to interact with the PostgreSQL database.
- **PostgreSQL**: Robust, relational SQL database management system.
- **Zod**: Type-safe schema validation middleware to secure endpoints and validate request payloads.
- **JWT (JSON Web Tokens)**: Used for state-free secure user session tokens.
- **Bcrypt**: Industrial-grade hashing algorithm for encrypting user passwords.
- **CORS & Logger**: Middleware for cross-origin resource sharing and request logging.

### 📱 Mobile Application
- **Expo & React Native**: Native platform development framework for compiling to iOS, Android, and Web.
- **Expo Router**: File-based router for seamless page navigation (`/auth/login`, `/auth/register`, `/app/profile`).
- **React Native Safe Area Context**: Native safe area management for notch-bearing modern devices.
- **AsyncStorage**: Local device key-value storage for retaining user login sessions.
- **Axios**: Promised-based HTTP client used to fetch backend API endpoints.

---

## 🔑 Key Features
1. **Interactive Registration**: Secure user signup with real-time input validations (matching passwords, email formats, and required inputs).
2. **Secure Login**: Secure authentication checking hashed credentials, issuing JWTs on success.
3. **Session Retention**: Persistent logins via local token storage so the user doesn't have to log in every session.
4. **Endpoint Guarding**: Validation middleware sanitizes inputs before queries reach database layers.
