# Preptly

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)  
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

- 🎯 **Role-based question generation** – input your target role and get relevant questions  
- 📈 **Experience level tuning** – tailored for Junior / Mid / Senior candidates  
- 📝 **Explanations & answers** – each question comes with model answers & reasoning  
- 🔍 **Focus area filters** – Algorithms, System Design, Behavioral, and more  
- 🖥 **Interactive UI** – simple and intuitive design  
- ⚡ **Scalable backend** – built to expand with more roles and domains  

---

## 📊 Architecture & Tech Stack

| Component | Technology / Tools |
|-----------|--------------------|
| **Frontend** | React.js |
| **Backend** | Node.js / Express |
| **AI / ML** | GEMINI API |
| **Database** | MongoDB |
| **Auth** | JWT |


---
```
 ⚙️ Installation Guide

1. Clone the repository
git clone https://github.com/Deveshvishwakarma004/Preptly.git
cd Preptly

2. Install backend dependencies
cd Backend
npm install

3. Install frontend dependencies
cd ../Frontend
npm install

4. Set up environment variables
 Create a `.env` file in both Backend and Frontend (if needed) with keys like:
   - BACKEND_PORT
   - DB_URI
   - AI_API_KEY
   - FRONTEND_URL
   - etc.

5. Run the backend (in one terminal)
cd ../Backend
npm run dev

6. Run the frontend (in another terminal)
cd ../Frontend
npm start
