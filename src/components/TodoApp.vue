<template>
  <section class="max-w-2xl mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Görevlerim</h1>
      <button @click="toggleDarkMode" class="p-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white">
        {{ darkMode ? '☀️' : '🌙' }}
      </button>
    </div>

    <TodoInput @add-task="addTask" />
    <TodoList
      :tasks="filteredTasks"
      @toggle-complete="toggleComplete"
      @delete-task="deleteTask"
      @edit-task="editTask"
    />

    <div class="flex justify-center gap-2 mt-4">
      <button @click="filter = 'all'" :class="filterClass('all')">Hepsi</button>
      <button @click="filter = 'active'" :class="filterClass('active')">Aktif</button>
      <button @click="filter = 'completed'" :class="filterClass('completed')">Tamamlandı</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';

const tasks = ref(JSON.parse(localStorage.getItem('tasks')) ?? []);
const filter = ref('all');
const darkMode = ref(JSON.parse(localStorage.getItem('darkMode')) ?? false);

const addTask = (task) => {
  tasks.value.push(task);
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
};

const toggleComplete = (id) => {
  const task = tasks.value.find(task => task.id === id);
  if (task) task.completed = !task.completed;
};

const editTask = (id, newText) => {
  const task = tasks.value.find(task => task.id === id);
  if (task) task.text = newText;
};

const filteredTasks = computed(() => {
  if (filter.value === 'active') return tasks.value.filter(task => !task.completed);
  if (filter.value === 'completed') return tasks.value.filter(task => task.completed);
  return tasks.value;
});

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', JSON.stringify(darkMode.value));

  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};


const filterClass = (type) => 
  `px-4 py-2 rounded ${filter.value === type ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`;
</script>