🚀 AI Code Reviewer — Multi-Language Intelligent Code Review Platform

An AI-powered web application that allows developers to submit source code in multiple programming languages and receive instant, structured, and high-quality code reviews.
The system highlights good practices, bad practices, and actionable improvements, helping developers write cleaner, faster, and more maintainable code.

🌟 Features
🧠 AI-Powered Code Review
Uses Google Gemini to analyze and evaluate source code.
Provides professional-level feedback similar to a senior software engineer.

🌍 Multi-Language Support
Review code written in: JavaScript,Python,Java,C++,Go
Each language is reviewed using language-specific best practices.

🧩 Structured Review Output
Every code review is returned in a clear format:

🟢 Good Sides – What is done well

🔴 Bad Sides – Bugs, risks, or poor practices

🛠 Improvement & Optimization Hints – How to improve

📌 Optional Improved Code – A refined version of the code

🖥️ Tech Stack
Frontend  React.js  react-simple-code-editor highlight.js react-markdown Axios Backend Node.js Express.js Google Gemini API

🏗️ Architecture
React UI → Express API → Gemini AI → Review Response → UI
The frontend sends the code and selected language to the backend, which then sends a prompt to Gemini AI and returns a structured review to the UI.

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Suyash1933/ai-code-reviewer.git
cd ai-code-reviewer

2️⃣ Backend Setup
cd BackEnd
npm install

Create a .env file:
GOOGLE_GEMINI_KEY=your_api_key_here

Start the server:
npm start
Backend runs on: http://localhost:3000

3️⃣ Frontend Setup
cd FrontEnd
npm install
npm run dev

Frontend runs on: http://localhost:5173

🧪 How It Works

Select a programming language 
Write or paste your code
Click Review
The AI analyzes your code
You receive a detailed review in real time

🎯 Why This Project?

This project is designed to:
Help developers learn better coding practices , Speed up code reviews , Improve code quality before deployment ,Support multiple programming languages with one tool
It simulates how real engineers review code in tech companies.

🛡️ Security & Performance
All AI requests are handled on the backend.API keys are protected in environment variables. Lightweight and fast response cycle

🔮 Future Enhancements
File upload support
GitHub repository analysis
Test case generation
Code complexity metrics
History & user accounts

📜 License
MIT License
