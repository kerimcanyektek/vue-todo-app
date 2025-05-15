<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <TodoApp :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoApp from './components/TodoApp.vue';

const darkMode = ref(JSON.parse(localStorage.getItem('darkMode')) ?? false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
};
</script>