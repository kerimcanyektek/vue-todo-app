<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <TodoApp />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import TodoApp from './components/TodoApp.vue';

const darkMode = ref(JSON.parse(localStorage.getItem('darkMode')) ?? false);

watch(darkMode, (value) => {
  localStorage.setItem('darkMode', JSON.stringify(value));
});
</script>