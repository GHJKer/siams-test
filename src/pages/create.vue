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
      <alert v-model="isShowAlert" :title="alertTitle" :text="alertText" :type="'success'"/>
    </v-container>
  </v-form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCreate } from '../composables/useCreate';
import type { VForm } from 'vuetify/components';
import {
  nameRules,
  birthDateRules,
  emailRules,
  phoneRules,
} from '../shared/validation/rules';
import alert from '../components/alert.vue';

const {
  fullName,
  dateOfBirth,
  email,
  phone,
  addUserFunc,
} = useCreate();

const isShowAlert = ref(false);
const alertText = ref('New user has just been added!');
const alertTitle = ref('Success!');
const formRef = useTemplateRef<typeof VForm | null>('formRef');

  async function addUser() {
    if (!formRef.value) return;
    const { valid: isValid } = await formRef.value.validate();
    if (!isValid) return;
    isShowAlert.value = true;
    addUserFunc();
    formRef.value.reset();
  }

</script>
