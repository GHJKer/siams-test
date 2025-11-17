<template>
  <v-form
    ref="formRef"
    validate-on="submit"
    @submit.prevent="addUser"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="fullName"
            :counter="10"
            :rules="nameRules"
            label="Full name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="dateOfBirth"
            :counter="10"
            :rules="birthDateRules"
            label="Date of birth"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>


        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Phone number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn flat to="/" nuxt>To home page</v-btn>
      <v-btn flat nuxt type="submit">Add user</v-btn>
    </v-container>
  </v-form>
</template>
<script setup lang="ts">
import { useCreate } from '../composables/useCreate';
import type { VForm } from 'vuetify/components';
import {
  nameRules,
  birthDateRules,
  emailRules,
  phoneRules,
} from '../shared/validation/rules';
import { useSnackbarStore } from '../entities/snackbar/useSnackBarStore';

const {
  fullName,
  dateOfBirth,
  email,
  phone,
  addUserFunc,
} = useCreate();

const snackbar = useSnackbarStore();
const formRef = useTemplateRef<typeof VForm | null>('formRef');

  async function addUser() {
    if (!formRef.value) return;
    const { valid: isValid } = await formRef.value.validate();
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
    formRef.value.reset();
  }

</script>
