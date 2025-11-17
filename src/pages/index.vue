<template>
    <div>
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
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="d-flex ga-2 justify-end">
                        <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="edit(item.id)"></v-icon>

                        <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="remove(item.id)"></v-icon>
                        </div>
                    </template>
                </v-data-table>
            </v-card>
            <v-btn flat to="/create" nuxt>To create user page</v-btn>
        </v-container>
        <EditDialog v-model="isEditOpen" :userId="userId" />
        <DeleteDialog v-model="isDeleteOpen" :userId="userId" />
        <v-snackbar
            v-model="isShowSnackBar"
            :timeout="2000"
            location="top right"
            color="success"
            >
            <div class="text-subtitle-1 pb-2">{{ snackBarTitle }}</div>
            <div>{{ snackBarText }}</div>
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">
import { useIndex } from '../composables/useIndex'
import EditDialog from '../components/EditDialog.vue'
import DeleteDialog from '../components/DeleteDialog.vue'

const {
    search,
    headers,
    userList,
    isShowSnackBar,
    snackBarTitle,
    snackBarText,
} = useIndex()
const isEditOpen = ref(false);
const isDeleteOpen = ref(false);
const userId = ref('');

function edit(id: string) {
    isEditOpen.value = true;
    userId.value = id;
}

function remove(id: string) {
    isDeleteOpen.value = true;
    userId.value = id;
}

</script>
