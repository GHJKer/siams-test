<template>
  <v-form
    ref="formRef"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="model.fullName"
            :rules="nameRules"
            label="Full name"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="model.dateOfBirth"
            :rules="birthDateRules"
            label="Date of birth"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="model.email"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-col>


        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="model.phone"
            :rules="phoneRules"
            label="Phone number"
            required
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script setup lang="ts">
import type { VForm } from 'vuetify/components';
import {
  nameRules,
  birthDateRules,
  emailRules,
  phoneRules,
} from '../shared/validation/rules';
import type { User } from '../entities/user/types/user'

    const model = defineModel<Omit<User, 'id'>>({required: true});
    const formRef = useTemplateRef<typeof VForm | null>('formRef');

    async function validate() {
        if (!formRef.value) return false;
        const { valid } = await formRef.value.validate();
        return valid;
    }

    function reset() {
        if (!formRef.value) return false;
        return formRef.value.reset();
    }

    defineExpose({validate, reset});
</script>
