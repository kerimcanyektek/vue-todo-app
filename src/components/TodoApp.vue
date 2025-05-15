<template>
  <section class="max-w-2xl mx-auto p-4 relative">
    <div v-if="toastMessage" class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all">
      {{ toastMessage }}
    </div>

    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Görevlerim</h1>
      <button @click="emit('toggle-dark-mode')" class="p-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white transition-all">
        {{ darkMode ? '☀️' : '🌙' }}
      </button>
    </div>

    <TodoInput @add-task="handleAddTask" />
    <TodoList
      :tasks="filteredTasks"
      @toggle-complete="handleToggleComplete"
      @delete-task="handleDeleteTask"
      @edit-task="handleEditTask"
    />

    <div class="flex justify-center gap-4 mt-6">
      <button @click="() => setFilter('all')" :class="filterClass('all')">Hepsi</button>
      <button @click="() => setFilter('active')" :class="filterClass('active')">Aktif</button>
      <button @click="() => setFilter('completed')" :class="filterClass('completed')">Tamamlandı</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import { useTasks } from '../composables/useTasks.js';

const props = defineProps({
  darkMode: Boolean
});

const emit = defineEmits(['toggle-dark-mode']);

const { tasks, filter, addTask, deleteTask, toggleComplete, editTask, filteredTasks } = useTasks();

const toastMessage = ref('');

const showToast = (message) => {
  toastMessage.value = message;
  setTimeout(() => {
    toastMessage.value = '';
  }, 3000);
};

const handleAddTask = (task) => {
  addTask(task);
  showToast('Görev eklendi.');
};

const handleDeleteTask = (id) => {
  deleteTask(id);
  showToast('Görev silindi.');
};

const handleToggleComplete = (id) => {
  toggleComplete(id);
  showToast('Görev durumu değiştirildi.');
};

const handleEditTask = (id, newText) => {
  editTask(id, newText);
  showToast('Görev güncellendi.');
};

const setFilter = (type) => {
  filter.value = type;
};

const filterClass = (type) =>
  `px-4 py-2 rounded-md text-sm font-semibold ${
    filter.value === type
      ? 'bg-indigo-500 text-white'
      : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
  } transition-all`;
</script>
