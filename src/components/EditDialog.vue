<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="isDialogShow"
      max-width="800"
    >
    <v-form ref="formRef">
      <v-card
        prepend-icon="mdi-account"
        title="User"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-text-field
                v-model="fullName"
                label="Full name*"
                required
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-text-field
                v-model="dateOfBirth"
                label="Date of birth*"
                required
                :rules="birthDateRules"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-text-field
                v-model="email"
                label="Email*"
                required
                :rules="emailRules"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-text-field
                v-model="phone"
                label="Phone number*"
                required
                :rules="phoneRules"
              ></v-text-field>
            </v-col>
          </v-row>

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
    </v-form>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useUserStore } from '../entities/user/model/useUserStore';
  import type { VForm } from 'vuetify/components';
  import { useSnackbarStore } from '../entities/snackbar/useSnackBarStore';

  import {
    nameRules,
    birthDateRules,
    emailRules,
    phoneRules,
  } from '../shared/validation/rules';

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
  const formRef = useTemplateRef<typeof VForm | null>('formRef');

  const fullName = ref('');
  const dateOfBirth = ref('');
  const email = ref('');
  const phone = ref('');

  function close() {
    isDialogShow.value = false;

    fullName.value = '';
    dateOfBirth.value = '';
    email.value = '';
    phone.value = '';
  }

  async function save() {
    if (!formRef.value) return;
    const { valid: isValid } = await formRef.value.validate();
    if (!isValid) {
      snackbar.show({
        title: 'Error',
        text: 'User data must be valid',
        type: 'error'
      })
      return;
    };
    const updatedUser = {
      fullName: fullName.value,
      dateOfBirth: dateOfBirth.value,
      email: email.value,
      phone: phone.value,
    }
    store.editUser(props.userId, updatedUser);
    emit('confirmEdit');
    close();
  }

  watch(isDialogShow, (val) => {
    if (val && user.value) {
      fullName.value = user.value.fullName
      dateOfBirth.value = user.value.dateOfBirth
      email.value = user.value.email
      phone.value = user.value.phone
    }
  })
</script>
