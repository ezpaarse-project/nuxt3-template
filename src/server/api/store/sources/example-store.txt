import { defineStore } from 'pinia';

import { ref } from '#imports';

export const useExampleStore = defineStore('example', () => {
  const data = ref(1);

  function increment(i) {
    data.value += i;
  }

  return {
    data,
    increment,
  };
});

export default useExampleStore;
