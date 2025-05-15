<template>
  <div class="flex flex-col gap-4 mt-6">
    <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle-complete="$emit('toggle-complete', $event)"
      @delete-task="$emit('delete-task', $event)"
      @edit-task="(id, newText) => $emit('edit-task', id, newText)"
    />
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(['toggle-complete', 'delete-task', 'edit-task']);
</script>
