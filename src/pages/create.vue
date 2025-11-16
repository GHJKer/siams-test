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
            label="First name"
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
      <v-alert
        v-model="isShowAlert"
        color="success"
        icon="$success"
        :title="alertTitle"
        :text="alertText"
      ></v-alert>
    </v-container>
  </v-form>
</template>
<script setup>
import { ref } from 'vue';
import { useCreate } from '../composables/useCreate';

const {
  fullName,
  dateOfBirth,
  email,
  phone,
  addUser,
} = useCreate();

const isShowAlert = ref(false);
const alertText = ref('New user has just been added!');
const alertTitle = ref('Success!');
const formRef = ref(null);

  const nameRules = [
    value => {
      if (value) return true;
      return 'Name is required.';
    },
    value => {
      if (value?.length <= 20) return true;
      return 'Name must be less than 20 characters.';
    },
  ]

  const birthDateRules = [
    value => {
      if (value) return true;
      return 'Birth date is required.';
    },
    value => {
      if (/^\d{2}-\d{2}-\d{4}$/.test(value)) return true;
      return 'Birth date must be of type dd-mm-yyyy.';
    },
  ]

  const emailRules = [
    value => {
      if (value) return true;
      return 'E-mail is required.';
    },
    value => {
      if (/.+@.+\..+/.test(value)) return true;
      return 'E-mail must be valid.';
    },
  ]

  const phoneRules = [
    value => {
      if (!value) return 'Phone number is required.';
      return true;
    },
    value => {
      const phoneRegex = /^\+?7[- ]?\d{3}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
      if (phoneRegex.test(value)) return true;
      return 'Phone number must be a valid Russian number (+7-XXX-XXX-XX-XX).';
    }
  ]

  async function addUser() {
    const { valid: isValid } = await formRef.value.validate();

    if (!isValid) return;

    isShowAlert.value = true;
    store.addUser({
      fullName: fullName.value,
      dateOfBirth: dateOfBirth.value,
      email: email.value,
      phone: phone.value,
    })

    formRef.value.reset();
  }
</script>
