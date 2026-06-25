Counter App using React Custom Hook

This is a simple and clean React application built to demonstrate how to extract and reuse logic using a custom hook (useCounter).

Tech Stack
React (Functional Components & Hooks)
JavaScript (ES6+)
CSS (basic styling)

Multiple independent counters
➕ Increment, ➖ Decrement, 🔄 Reset functionality
♻️ Reusable logic using custom hook
🎯 Clean and minimal UI
⚡ Step-based counter (bonus feature)

Project Structure
src/
 ├── components/
 │    └── Counter.jsx
 ├── hooks/
 │    └── useCounter.js
 ├── App.js
 └── App.css

 How It Works
1. Custom Hook
function useCounter(initialValue, step = 1)

Returns:

count
increment()
decrement()
reset()

2. Counter Component
Accepts:
title
initialValue
step (optional)
Uses useCounter hook internally

3. App Component
Renders multiple counters with different initial values

How to Run the Project
# Install dependencies
npm install
# Start development server
npm start

OR (if using Vite):

npm run dev


Operations

Increment
Decrement
Reset

Learning Outcome

* Understanding React Hooks

* Building custom hooks

* Managing component state

* Writing clean and reusable code
