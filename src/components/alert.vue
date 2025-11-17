<template>
  <v-alert
    v-model="isShowAlert"
    :color="type"
    :icon="`$${type}`"
    :title="title"
    :text="text"
  ></v-alert>
</template>

<script setup lang="ts">
import { watch } from 'vue';

interface Props {
  title: string;
  text: string;
  type: string;
}

defineProps<Props>();
const isShowAlert = defineModel<boolean>( { required: true });

watch(
  () => isShowAlert.value,
  (value) => {
    if (value === true) {
      setTimeout(() => {
        isShowAlert.value = false
      }, 2000)
    }
  })
</script>
