<template>
    <v-container>
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
        <v-btn flat to="/create" nuxt>To create user page</v-btn>
    </v-container>
</template>

<script setup lang="ts">
import { useIndex } from '../composables/useIndex'

const { search, headers, userList } = useIndex()

</script>
