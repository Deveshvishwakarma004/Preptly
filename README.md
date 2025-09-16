# Preptly

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)  
[![Build Status](https://img.shields.io/github/actions/workflow/status/Deveshvishwakarma004/Preptly/main.yml?branch=main)](#)  
[![GitHub issues](https://img.shields.io/github/issues/Deveshvishwakarma004/Preptly)](#issues)  
[![GitHub stars](https://img.shields.io/github/stars/Deveshvishwakarma004/Preptly)](#)

---

## 🚀 Project Overview

**Preptly** is an **AI-powered interview preparation platform** designed to help candidates sharpen their skills, no matter their role or experience level. The platform dynamically generates interview questions *and* model answers (including explanations), tailored to:

- Role type (e.g. Frontend, Backend, Data Science, Product etc.)  
- Level of experience (e.g. Junior, Mid, Senior)  
- Focus areas (e.g. Algorithms, System Design, Behavioral, Language-specific questions)  

Preptly aims to make interview prep more personalized, efficient, and effective.

---

## 🧰 Features

| Feature | Description |
|---------|-------------|
| **Role-based question generation** | Input your target role and get relevant questions (e.g. “Backend Engineer”) |
| **Experience level tuning** | Questions and answers shaped for your level: Junior / Mid / Senior |
| **Explanations / model answers** | Each question comes with a sample answer + explanation so you can understand *why* |
| **Focus area filters** | Ability to focus at e.g. System Design, Behavioral, Coding Algorithms, Domain-specific knowledge |
| **Interactive UI** | Clean, intuitive frontend where you can input preferences, review answers, etc. |
| **Scalable backend** | Supports adding more roles, question domains; architecture designed for growth |

---

## 📊 Architecture & Tech Stack

| Component | Technology / Tools |
|-----------|--------------------|
| **Frontend** | React.js |
| **Backend** | Node.js / Express |
| **AI** | Gemini API |
| **Database** | MongoDB |
| **Authentication & Authorization** | JWT |

---

## 🔧 Installation & Setup

Here are steps to get Preptly up and running locally for development.


# 1. Clone the repository
git clone https://github.com/Deveshvishwakarma004/Preptly.git
cd Preptly

# 2. Install backend dependencies
cd Backend
npm install

# 3. Install frontend dependencies
cd ../Frontend
npm install

# 4. Set up environment variables
# Create a `.env` file in both Backend and Frontend (if needed) with keys like:
#   - BACKEND_PORT
#   - DB_URI
#   - AI_API_KEY
#   - FRONTEND_URL
#   - etc.

# 5. Run the backend (in one terminal)
cd ../Backend
npm run dev

# 6. Run the frontend (in another terminal)
cd ../Frontend
npm start
