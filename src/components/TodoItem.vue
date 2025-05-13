<template>
  <div
    class="flex items-center justify-between p-3 rounded border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition"
  >
    <div class="flex items-center gap-3">
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle-complete')" />
      <div class="flex flex-col">
        <input
          v-if="isEditing"
          v-model="editableText"
          @keyup.enter="submitEdit"
          class="px-2 py-1 rounded border focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-500 dark:text-white"
        />
        <p
          v-else
          :class="['text-gray-800 dark:text-gray-200', { 'line-through text-gray-400': task.completed }]"
          @dblclick="startEditing"
        >
          {{ task.text }}
        </p>
        <span class="text-xs mt-1" :class="priorityColor(task.priority)">
          {{ priorityLabel(task.priority) }}
        </span>
      </div>
    </div>

    <button
      @click="$emit('delete-task')"
      class="text-red-500 hover:text-red-600 transition"
    >
      ✖
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['toggle-complete', 'delete-task', 'edit-task']);
const isEditing = ref(false);
const editableText = ref(props.task.text);

const startEditing = () => {
  isEditing.value = true;
};

const submitEdit = () => {
  if (editableText.value.trim()) {
    emit('edit-task', editableText.value.trim());
  }
  isEditing.value = false;
};

const priorityLabel = (priority) => {
  if (priority === 'low') return 'Düşük Öncelik';
  if (priority === 'medium') return 'Orta Öncelik';
  if (priority === 'high') return 'Yüksek Öncelik';
};

const priorityColor = (priority) => {
  if (priority === 'low') return 'text-green-500';
  if (priority === 'medium') return 'text-yellow-500';
  if (priority === 'high') return 'text-red-500';
};
</script>