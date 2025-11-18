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
          <v-date-input
            v-model="dateModel"
            :rules="birthDateRules"
            :display-format="format"
            label="Birth date"
            max-width="368"
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
            v-mask="'+7 (###) ###-##-##'"
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
  import { computed } from 'vue';
  import { useDate } from 'vuetify';
  import type { VForm } from 'vuetify/components';
  import {
    nameRules,
    emailRules,
    phoneRules,
    birthDateRules,
  } from '../shared/validation/rules';
  import type { User } from '../entities/user/types/user'

  const model = defineModel<Omit<User, 'id'>>({required: true});
  const formRef = useTemplateRef<typeof VForm | null>('formRef');
  const adapter = useDate();

  function format (date: unknown) {
    return adapter.toISO(date);
  }

  const dateModel = computed<string | Date | null>({
    get() {
      return model.value.dateOfBirth || null;
    },
    set(value: string | Date | null) {
      if (value instanceof Date) {
        model.value.dateOfBirth = adapter.toISO(value);
      } else {
        model.value.dateOfBirth = value || '';
      }
    }
  });

  async function validate() {
    if (!formRef.value) return false;
    const valid = await formRef.value.validate();
    return valid;
  }

  function reset() {
    if (!formRef.value) return false;
    return formRef.value.reset();
  }

  defineExpose({validate, reset});
</script>
