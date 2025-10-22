# Fullstack User Management System with RBAC

A fullstack application featuring role-based access control (RBAC), JWT authentication, and protected CRUD operations. Built with Node.js/Express backend and React frontend.

## 🚀 Live Links

- **Frontend Deployment**: [https://masai-full.netlify.app]
- **Backend Deployment**: [https://masai-full-stack.onrender.com/]
- **GitHub Repository (Frontend)**: [https://github.com/anzirish/Masai/tree/main/unit-6/FullStack/frontend]
- **GitHub Repository (Backend)**: [https://github.com/anzirish/Masai/tree/main/unit-6/FullStack/backend]

## 📋 Project Overview

This application implements a secure user management system with three-tier role hierarchy (Admin, Moderator, User). It provides JWT-based authentication, protected routes, and full CRUD operations on user profiles and resources.

### Key Features

- User authentication (register/login) with JWT tokens
- Role-based access control (Admin, Moderator, User)
- Admin dashboard to view and manage all users
- User profile management (view and update own profile)
- Resource CRUD operations with role-based permissions
- Protected routes and middleware for authorization
- Secure password hashing with bcrypt

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas (Cloud)
- **Authentication**: JWT (jsonwebtoken)
- **Password Security**: bcryptjs
- **Deployment**: Render

### Frontend
- **Framework**: React.js (or HTML/CSS/JS)
- **Styling**: CSS3
- **Deployment**: Netlify

## 📁 Folder Structure

### Backend Structure
```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── middleware/
│   ├── auth.js              # JWT verification
│   ├── roleCheck.js         # Role-based access control
│   └── validation.js        # Input validation
├── models/
│   ├── User.js              # User schema
│   └── Resource.js          # Resource schema
├── routes/
│   ├── auth.js              # Register/Login routes
│   ├── users.js             # User management routes
│   ├── profile.js           # Profile routes
│   └── resources.js         # Resource CRUD routes
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   └── resourceController.js
├── .env                     # Environment variables
├── .gitignore
├── server.js                # Entry point
└── package.json
```

### Frontend Structure
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── UserDashboard.jsx
│   │   ├── Profile/
│   │   │   └── ProfilePage.jsx
│   │   └── Resources/
│   │       ├── ResourceList.jsx
│   │       └── ResourceForm.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── .env
└── package.json
```

## 🔧 Setup Steps

### Backend Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/anzirish/rbac-backend.git
   cd rbac-backend
   npm install
   ```

2. **Install dependencies**
   ```bash
   npm install express mongoose dotenv bcryptjs jsonwebtoken express-validator cors
   ```

3. **Configure environment variables**
   
   Create `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. **Run the server**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/anzirish/rbac-frontend.git
   cd rbac-frontend
   npm install
   ```

2. **Install dependencies**
   ```bash
   npm install react-router-dom axios
   ```

3. **Configure environment**
   
   Create `.env` file:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Run the application**
   ```bash
   npm start
   ```

## 📡 API Documentation

| Endpoint | Method | Access | Description |
|----------|--------|--------|-------------|
| `/api/auth/register` | POST | Public | Register new user |
| `/api/auth/login` | POST | Public | Login user and get JWT token |
| `/api/users` | GET | Admin | Get all users |
| `/api/users/:id` | GET | Admin | Get user by ID |
| `/api/users/:id` | PUT | Admin | Update user |
| `/api/users/:id` | DELETE | Admin | Delete user |
| `/api/profile` | GET | Private | Get own profile |
| `/api/profile` | PUT | Private | Update own profile |
| `/api/resources` | GET | Private | Get all resources |
| `/api/resources/:id` | GET | Private | Get resource by ID |
| `/api/resources` | POST | Moderator/Admin | Create resource |
| `/api/resources/:id` | PUT | Moderator/Admin/Owner | Update resource |
| `/api/resources/:id` | DELETE | Admin/Owner | Delete resource |

### Example Request/Response

**Register User:**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "role": "user"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Login:**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": "...", "name": "John Doe", "role": "user" }
}
```

**Create Resource:**
```json
POST /api/resources
Authorization: Bearer <token>
{
  "title": "My Resource",
  "description": "Description here",
  "category": "tutorial"
}

Response:
{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439012",
    "title": "My Resource",
    "description": "Description here",
    "createdBy": "507f1f77bcf86cd799439011"
  }
}
```

## 👨‍💻 Author

**Your Name**
- GitHub: [@anzirish](https://github.com/anzirish)
- Email: tanishq@gmail.co

---
