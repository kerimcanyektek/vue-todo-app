<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2 mb-6">
    <input
      v-model="text"
      type="text"
      placeholder="Yeni görev ekle..."
      class="flex-1 px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    />
    <select v-model="priority" class="rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-2">
      <option value="low">Düşük</option>
      <option value="medium">Orta</option>
      <option value="high">Yüksek</option>
    </select>
    <button
      type="submit"
      class="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white transition"
    >
      Ekle
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-task']);
const text = ref('');
const priority = ref('low');

const handleSubmit = () => {
  if (!text.value.trim()) return;

  const newTask = {
    id: Date.now(),
    text: text.value.trim(),
    completed: false,
    priority: priority.value,
  };

  emit('add-task', newTask);
  text.value = '';
  priority.value = 'low';
};
</script>