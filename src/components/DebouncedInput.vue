<template>
  <v-text-field
    v-model="localValue"
    label="Search"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    hide-details
    single-line
  />
</template>

<script setup lang="ts">
    import { watchDebounced } from '@vueuse/core';

    interface Props {
        debounceTime?: number;
    }

    const props = withDefaults(defineProps<Props>(), {
        debounceTime: 300
    });

    const model = defineModel<string>({ default: '' });
    const localValue = ref(model.value);

    watchDebounced(
        localValue,
        (value) => {
            model.value = value;
        },
        { debounce: props.debounceTime }
    );
</script>
