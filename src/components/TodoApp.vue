<template>
  <section class="max-w-2xl mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Görevlerim</h1>
      <button @click="emit('toggle-dark-mode')" class="p-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white">
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
      <button @click="filter.value = 'all'" :class="filterClass('all')">Hepsi</button>
      <button @click="filter.value = 'active'" :class="filterClass('active')">Aktif</button>
      <button @click="filter.value = 'completed'" :class="filterClass('completed')">Tamamlandı</button>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import { useTasks } from '../composables/useTasks.js';

const props = defineProps({
  darkMode: Boolean
});

const emit = defineEmits(['toggle-dark-mode']);

const { tasks, filter, addTask, deleteTask, toggleComplete, editTask, filteredTasks } = useTasks();

const filterClass = (type) =>
  `px-4 py-2 rounded ${
    filter.value === type
      ? 'bg-indigo-500 text-white'
      : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
  }`;
</script>