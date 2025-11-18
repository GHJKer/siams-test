<template>
  <v-container>
    <UserForm ref="userFormRef" v-model="formData" />

    <div class="mt-4">
      <v-btn flat to="/" nuxt>To home page</v-btn>
      <v-btn flat @click="handleAddUser">Add user</v-btn>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import UserForm from '../components/UserForm.vue';
import { useCreate } from '../composables/useCreate';
import type { VForm } from 'vuetify/components';
import { useSnackbarStore } from '../entities/snackbar/useSnackBarStore';

const {
  formData,
  addUserFunc,
} = useCreate();

const snackbar = useSnackbarStore();
const userFormRef = useTemplateRef<typeof VForm | null>('userFormRef');

  async function handleAddUser() {
    if (!userFormRef.value) return;
    const isValid = await userFormRef.value.validate();
    if (!isValid) {
      snackbar.show({
        title: 'Error',
        text: 'The form must be valid',
        type: 'error'
      })
      return;
    };
    addUserFunc();
    snackbar.show({
      title: 'Success',
      text: 'User has been deleted',
      type: 'success'
    })
    userFormRef.value.reset();
  }

</script>
