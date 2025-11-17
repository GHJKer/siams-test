<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="isDialogShow"
      max-width="400"
      persistent
    >
      <v-card
        text="Delete the user?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
            @click="close"
            prepend-icon="mdi-cancel"
          >
            No
          </v-btn>

          <v-btn
            @click="deleteUser"
            prepend-icon="mdi-checkbox-marked-circle"
          >
            Yes
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
  interface Emits {
    (e: 'confirm'): void;
  }
  const emit = defineEmits<Emits>();

  const isDialogShow = defineModel<boolean>( { required: true })

  function close() {
    isDialogShow.value = false;
  }

  function deleteUser() {
    emit('confirm');
    close();
  }
</script>
