<template>
    <div>
        <h1>Siams Nuxt 4</h1>
        <v-btn flat to="/create" nuxt>Create user</v-btn>
        <v-card
            flat
        >
            <template v-slot:text>
            <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
            ></v-text-field>
            </template>

            <v-data-table
            :headers="headers"
            :items="userList"
            :search="search"
            ></v-data-table>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('');
const headers = [
    { key: 'fullName', title: 'FullName' },
    { key: 'dateOfBirth', title: 'DateOfBirth' },
    { key: 'email', sortable: false, title: 'Email' },
    { key: 'phone', sortable: false, title: 'Phone' },
]
const userList = ref([
    { fullName: 'Иванов Иван Иванович', dateOfBirth: '1990-05-15', email: 'ivanov@example.com', phone: '+7-999-123-45-67' },
    { fullName: 'Петрова Анна Сергеевна', dateOfBirth: '1985-12-03', email: 'petrova@example.com', phone: '+7-999-234-56-78' },
    { fullName: 'Сидоров Алексей Петрович', dateOfBirth: '1995-07-22', email: 'sidorov@example.com', phone: '+7-999-345-67-89' },
])

</script>
