<template>
  <v-snackbar
    v-model="isShow"
    :timeout="2000"
    location="top right"
    :color="color"
  >
    <div class="text-subtitle-1 pb-2">{{ title }}</div>
    <div>{{ text }}</div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSnackbarStore } from '../entities/snackbar/useSnackBarStore';

const store = useSnackbarStore();
const { isShow, title, text, color } = storeToRefs(store);
</script>
