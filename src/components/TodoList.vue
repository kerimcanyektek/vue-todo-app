<template>
  <div>
    <transition-group name="fade" tag="div" class="grid gap-3">
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-complete="$emit('toggle-complete', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        @edit-task="$emit('edit-task', { id: task.id, newText: $event })"
      />
    </transition-group>

    <div v-if="tasks.length === 0" class="text-center mt-8 text-gray-400 dark:text-gray-500">
      🎉 Şu anda hiç görevin yok. Harika gidiyorsun!
    </div>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

defineEmits(['toggle-complete', 'delete-task', 'edit-task']);
</script>