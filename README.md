# InviGuard - Digital Invigilation Management System

InviGuard is a modern, full-stack application designed to streamline the management of exam invigilators. It bridges the gap between educational institutions and college students looking for supervision opportunities.

## ✨ Features

- **Google OAuth 2.0 Integration**: Seamless one-click login for students and administrators.
- **Role-Based Dashboards**: Tailored experiences for Students, Center Coordinators, and Admins.
- **DigiLocker Verification**: Secure document verification using official government channels.
- **Premium UI/UX**: Built with React and Vanilla CSS, featuring glassmorphism and smooth animations.
- **Real-time Management**: Create, publish, and manage exams and invigilators efficiently.

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Lucide React (Icons)
- CSS3 (Custom Design System)

**Backend:**
- Node.js & Express
- MongoDB (Mongoose ODM)
- Passport.js (Authentication)
- JWT (JSON Web Tokens)

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd server && npm install
   ```
3. Set up your `.env` files (refer to `.env.example`)
4. Start the development environment:
   ```bash
   # Root directory
   npm run dev
   # Server directory
   npm run dev
   ```

## 🔒 Security

- Protected API routes using JWT middleware.
- Secure password hashing with Bcrypt.js.
- Sanitized database queries to prevent injection.
