<template>
  <div
    class="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all">
    <div class="flex flex-col gap-1 w-full">
      <div class="flex items-center gap-3">
        <input type="checkbox" :checked="task.completed" @change="$emit('toggle-complete', task.id)"
          class="w-5 h-5 accent-indigo-500 cursor-pointer" />

        <div v-if="!isEditing" @dblclick="startEditing"
          class="flex-1 text-lg font-medium text-gray-800 dark:text-gray-200"
          :class="{ 'line-through text-gray-400': task.completed }">
          {{ task.text }}
        </div>


        <input v-else v-model="editedText" @keyup.enter="saveEdit" @blur="saveEdit"
          class="flex-1 border-2 border-gray-300 dark:border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 dark:bg-gray-700 dark:text-white text-lg transition-all" />
      </div>

      <div class="mt-1">
        <span class="px-2 py-1 text-xs font-semibold rounded-full" :class="priorityClass(task.priority)">
          {{ priorityText(task.priority) }}
        </span>
      </div>
    </div>

    <div class="flex items-center gap-2 ml-4">
      <button @click="startEditing"
        class="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-all">
        Düzenle
      </button>
      <button @click="$emit('delete-task', task.id)"
        class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-all">
        Sil
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  task: Object,
});

const emit = defineEmits(['toggle-complete', 'delete-task', 'edit-task']);

const isEditing = ref(false);
const editedText = ref('');

const startEditing = () => {
  isEditing.value = true;
  editedText.value = props.task.text;
};

const saveEdit = () => {
  if (editedText.value.trim() && editedText.value !== props.task.text) {
    emit('edit-task', props.task.id, editedText.value.trim());
  }
  isEditing.value = false;
};

const priorityClass = (priority) => {
  switch (priority) {
    case 'high':
      return 'bg-red-500 text-white';
    case 'medium':
      return 'bg-yellow-400 text-gray-800';
    case 'low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-300 text-gray-800';
  }
};

const priorityText = (priority) => {
  switch (priority) {
    case 'high':
      return 'Yüksek Öncelik';
    case 'medium':
      return 'Orta Öncelik';
    case 'low':
      return 'Düşük Öncelik';
    default:
      return '';
  }
};
</script>
