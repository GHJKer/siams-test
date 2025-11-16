import { defineStore } from 'pinia';
import type { User } from './user'

export const useUserStore = defineStore('users', {
    state: () => ({
        list: [] as User[],
    }),
    actions: {
        addUser(user: User) {
            {
                this.list.push(user)
            }
        }
    }
})
