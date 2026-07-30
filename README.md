# 🇲🇦 Marhba (مرحباً) — Minimalist Mobile Authentication App

Welcome to **Marhba** ("welcome"), a minimalist, high-fidelity mobile application featuring a robust, double-protected authentication flow. This project bridges a secure Express + Sequelize (PostgreSQL) backend with a modern Expo mobile frontend using Zustand and `expo-secure-store`.

![Marhba Mobile Application UI Showcase](./UI/marhba_banner.jpg)

---

## 🛡️ The Golden Rule of Marhba
> **Double Protection Routing:** A protected screen on the frontend is **never** enough. Even if an unauthenticated user is guarded by Expo Router redirects, a malicious agent could bypass the UI and hit the API endpoints directly. Security is strictly enforced on both sides:
> 1. **Backend-Side**: Endpoints are strictly protected via JWT token-verification middlewares.
> 2. **Frontend-Side**: Screens are guarded via routing context and custom root layouts (`<Stack.Protected>`).

---

## 🚀 Key Features

* **Dual-Layer Guarding**: Express route controllers isolated from validation/verification middleware combined with Expo Router auth guards.
* **Warm Moroccan Aesthetic**: Visual identity featuring a warm beige background, terracotta rust elements, and gold accents.
* **Zustand State Store**: Global state managing `user`, `token`, `isAuthenticated`, `isLoading`, and key auth actions.
* **Session Persistence**: Secure JWT storage using `expo-secure-store` with auto-session restoration on startup.
* **MVC Backend Architecture**: Organized code separating concerns into `models/`, `controllers/`, `middleware/`, and `routes/`.
* **Zero-Leak Response**: Secure password hashing via `bcrypt` that is never exposed in JSON responses.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Backend** | Node.js, Express, PostgreSQL, Sequelize, `bcrypt`, `jsonwebtoken`, `zod`, `dotenv` |
| **Frontend** | Expo, Expo Router (file-based navigation), Axios (configured instance & interceptor), Zustand, `expo-secure-store` |
| **Tools** | Postman, Git/GitHub, Docker Compose |

---

## 📂 Project Structure

```bash
marhaba-auth/
├── backend/
│   ├── config/          # Sequelize & Database connection configs
│   ├── controllers/     # Business logic for auth actions
│   ├── middleware/      # Logger, validation, JWT auth, error handler
│   ├── models/          # User Sequelize model
│   ├── routes/          # Express route declarations
│   ├── server.js        # Entry point for Express server
│   └── package.json
│
├── mobile/
│   ├── app/             # Expo Router screens (Auth group, App group, layouts)
│   ├── services/        # Axios API instance and request interceptors
│   ├── store/           # Zustand state management
│   ├── components/      # UI components
│   └── package.json
│
└── UI/
    ├── Desgin.md        # Detailed Design System specifications
    └── marhba_banner.jpg # Showcase visual
```

---

## 🔌 API Endpoints (Backend)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | **Public** | Hashes password, creates user, returns JWT and user info |
| `POST` | `/api/auth/login` | **Public** | Verifies email & hashed password, returns JWT |
| `GET` | `/api/auth/me` | **Private** (`authenticate` middleware) | Decodes token, returns logged-in user profile |

### Core Middlewares:
1. `logger`: Logs incoming `[Method] URL - Timestamp`.
2. `validateRegister`/`validateLogin`: Uses schema checks (Zod) to validate email/password format before reaching the controllers.
3. `authenticate`: Validates `Authorization: Bearer <token>` header, decodes, and attaches payload to `req.user`.
4. `errorHandler`: Gracefully handles system or syntax errors and returns standardized JSON format `{ error: "..." }`.

---

## 📱 Mobile Architecture (Frontend)

### Screens & Navigation Guard
* **Public Route Group (`/(auth)`)**: Includes `login` & `register` screens. Accessible only by unauthenticated users.
* **Private Route Group (`/(app)`)**: Includes `home` (displaying `"Marhba, {fullName} 👋"` + Logout button). Guarded by auth state.

### Interceptor configuration
An Axios client (`services/api.js`) automatically fetches the stored JWT from `expo-secure-store` and appends it to all outbound request headers as a bearer token.

---

## 🏁 Getting Started

### 📦 Backend Setup

1. **Navigate to backend and install dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` file inside the `backend` folder:
   ```env
   PORT=5000
   DATABASE_URL=postgres://username:password@localhost:5432/marhba_db
   JWT_SECRET=your_super_secret_jwt_key
   ```

3. **Start the database (or use Docker)**:
   ```bash
   docker-compose up -d
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

---

### 📱 Mobile Setup

1. **Navigate to mobile and install dependencies**:
   ```bash
   cd ../mobile
   npm install
   ```

2. **Configure backend URL**:
   Ensure the base API path in `services/api.js` points to your active backend address (e.g. `http://localhost:5000` or your local IP address).

3. **Launch the Expo Project**:
   ```bash
   npm start
   ```
   Press `a` for Android, `i` for iOS emulator, or scan the QR code using the Expo Go application.
