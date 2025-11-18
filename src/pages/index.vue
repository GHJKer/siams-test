<template>
  <div>
    <v-container>
      <v-card
          flat
      >
        <template v-slot:text>
            <DebouncedInput
                v-model="search"
                :debounce-time="500"
            />
        </template>

        <v-data-table
          :headers="headers"
          :items="userList"
          :search="search"
        >
          <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-end">
            <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="openEditDialog(item.id)"></v-icon>

            <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="openDeleteDialog(item.id)"></v-icon>
            </div>
          </template>
        </v-data-table>
      </v-card>
      <v-btn flat to="/create" nuxt>To create user page</v-btn>
      <v-btn flat @click="populateList" nuxt>Populate</v-btn>
    </v-container>
    <EditDialog
      v-model="isEditOpen"
      :userId="userId"
      @confirmEdit="handleEditSaved"
    />
    <DeleteDialog
      v-model="isDeleteOpen"
      :userId="userId"
      @confirm="deleteUser"
    />
  </div>
</template>

<script setup lang="ts">
  import EditDialog from '../components/EditDialog.vue'
  import DeleteDialog from '../components/DeleteDialog.vue'
  import DebouncedInput from '../components/DebouncedInput.vue'
  import { useIndex } from '../composables/useIndex'
  import { useSnackbarStore } from '../entities/snackbar/useSnackBarStore';
  import { useUserStore } from '../entities/user/store/useUserStore';

  const snackbar = useSnackbarStore();
  const store = useUserStore();

  const {
    search,
    headers,
    userList,
    populateList,
  } = useIndex();

  const isEditOpen = ref(false);
  const isDeleteOpen = ref(false);
  const userId = ref('');

  function openEditDialog(id: string) {
    isEditOpen.value = true;
    userId.value = id;
  }

  function openDeleteDialog(id: string) {
    isDeleteOpen.value = true;
    userId.value = id;
  }

  function deleteUser() {
    store.removeUser(userId.value);
    userId.value = '';
    snackbar.show({
        title: 'Success',
        text: 'User has been deleted',
        type: 'success'
    })
  }

  function handleEditSaved() {
    userId.value = '';
    snackbar.show({
      title: 'Success',
      text: 'User has been updated',
      type: 'success'
    });
  }
</script>
