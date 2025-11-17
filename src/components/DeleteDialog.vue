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
import { useUserStore } from '../entities/user/model/useUserStore';
interface Props {
    userId: string;
    }

  const props = defineProps<Props>();
  const store = useUserStore();
  const isDialogShow = defineModel<boolean>( { required: true })

    function close() {
    isDialogShow.value = false;
  }

  function deleteUser() {
    store.removeUser(props.userId);
    close();
  }
</script>
