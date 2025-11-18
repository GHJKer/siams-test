<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isDialogShow"
      max-width="800"
    >
      <v-card
        prepend-icon="mdi-account"
        title="User"
      >
        <v-card-text>
          <UserForm
            ref="userFormRef"
            v-model="formData"
          />
          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="close"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="save"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import UserForm from '../components/UserForm.vue';
  import { useUserStore } from '../entities/user/store/useUserStore';
  import { useSnackbarStore } from '../entities/snackbar/useSnackBarStore';
  import type { VForm } from 'vuetify/components';

  interface Props {
    userId: string;
  }
  interface Emits {
    (e: 'confirmEdit'): void;
  }

  const snackbar = useSnackbarStore();
  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();
  const store = useUserStore();
  const user = computed(() => store.list.find(u => u.id === props.userId));
  const isDialogShow = defineModel<boolean>( { required: true });
  const userFormRef = useTemplateRef<typeof VForm | null>('userFormRef');

  const formData = ref({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
  });

  function close() {
    isDialogShow.value = false;

    formData.value = {
      fullName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
    };
    userFormRef.value?.reset();
  }

  async function save() {
    if (!userFormRef.value) return;
    const isValid  = await userFormRef.value.validate();
    if (!isValid.valid) {
      snackbar.show({
        title: 'Error',
        text: 'User data must be valid',
        type: 'error'
      })
      return;
    };
    store.editUser(props.userId, formData.value);
    emit('confirmEdit');
    close();
  }

  watch(isDialogShow, (val) => {
    if (val && user.value) {
      formData.value.fullName = user.value.fullName
      formData.value.dateOfBirth = user.value.dateOfBirth
      formData.value.email = user.value.email
      formData.value.phone = user.value.phone
    }
  })
</script>
