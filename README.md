<h1 align="center">Vue 3 + TailwindCSS Todo App</h1>

<p align="center">
  A modern, responsive Todo application built with Vue 3 Composition API and TailwindCSS.
  <br/>
  Fully functional with Dark Mode, Priority Management, LocalStorage persistence, and Toast Notifications.
</p>

---

## 🚀 Technologies Used

<ul>
  <li>Vue 3 (Composition API)</li>
  <li>Vite (Development Server & Build Tool)</li>
  <li>TailwindCSS (Utility-first CSS Framework)</li>
</ul>

---

## ✨ Main Features

<ul>
  <li><strong>Add, Edit, Delete, and Complete Tasks</strong></li>
  <li><strong>Priority Management:</strong> Tasks are labeled with Low, Medium, or High priority badges</li>
  <li><strong>LocalStorage Persistence:</strong> Tasks and Dark Mode preferences are saved</li>
  <li><strong>Dark Mode Support:</strong> Responsive and adaptive with smooth transitions</li>
  <li><strong>Toast Notifications:</strong> Visual feedback after task operations</li>
  <li><strong>Fully Responsive:</strong> Optimized for Mobile, Tablet, and Desktop</li>
</ul>

---

## 🧩 Project Structure

<pre>
/src
 ├── components
 │    ├── TodoApp.vue       # Main application structure
 │    ├── TodoInput.vue      # Input form for tasks
 │    ├── TodoList.vue       # Task list container
 │    ├── TodoItem.vue       # Individual task component
 ├── composables
 │    ├── useTasks.js        # Task management logic (CRUD + filter)
 │    ├── useDarkMode.js     # Dark Mode toggle and persistence
 ├── App.vue                 # Root component
 ├── main.js                 # Application entry point
</pre>

---

## 📋 Installation and Setup

<ol>
  <li><strong>Clone the repository:</strong></li>

  <pre><code>git clone https://github.com/yourusername/vue-todo-app.git
cd vue-todo-app</code></pre>

  <li><strong>Install dependencies:</strong></li>

  <pre><code>npm install</code></pre>

  <li><strong>Start the development server:</strong></li>

  <pre><code>npm run dev</code></pre>

  <li><strong>Build for production:</strong></li>

  <pre><code>npm run build</code></pre>
</ol>

---

## 📢 Notes

<ul>
  <li>Double-click a task or click "Edit" to modify it.</li>
  <li>Priority Badges Color Coding:
    <ul>
      <li><strong>High Priority:</strong> Red</li>
      <li><strong>Medium Priority:</strong> Yellow</li>
      <li><strong>Low Priority:</strong> Green</li>
    </ul>
  </li>
  <li>Dark Mode preference is saved automatically.</li>
  <li>Tasks persist after refresh through LocalStorage.</li>
</ul>

---
