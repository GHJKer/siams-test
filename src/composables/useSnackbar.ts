export function useSnackbar() {
  const isShow = ref(false);
  const title = ref('');
  const text = ref('');
  const color = ref('success');

  function show(options: {
    title: string;
    text: string;
    type?: 'success' | 'error' | 'warning' | 'info';
  }) {
    title.value = options.title;
    text.value = options.text;
    color.value = options.type || 'success';
    isShow.value = true;

    console.log('Baam');

  }

  return {
    isShow,
    title,
    text,
    color,
    show,
  };
};
