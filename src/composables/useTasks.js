import { ref, computed, watch } from 'vue';

export function useTasks() {
  const tasks = ref(JSON.parse(localStorage.getItem('tasks')) ?? []);
  const filter = ref('all');

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

  return {
    tasks,
    filter,
    addTask,
    deleteTask,
    toggleComplete,
    editTask,
    filteredTasks,
  };
}
