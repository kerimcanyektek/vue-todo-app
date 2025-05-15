import { ref } from 'vue';

export function useDarkMode() {
  const darkMode = ref(JSON.parse(localStorage.getItem('darkMode')) ?? false);

  const applyTheme = () => {
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
    applyTheme();
  };


  applyTheme();

  return {
    darkMode,
    toggleDarkMode,
  };
}