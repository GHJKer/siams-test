import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore('snackbar', () => {
  const isShow = ref(false);
  const title = ref('');
  const text = ref('');
  const color = ref('success');

  const show = (options: {
    title: string;
    text: string;
    type?: 'success' | 'error' | 'warning' | 'info';
  }) => {
    title.value = options.title;
    text.value = options.text;
    color.value = options.type || 'success';
    isShow.value = true;
  };

  return { isShow, title, text, color, show };
});
