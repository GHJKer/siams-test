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
        },
        editUser(id: User['id'], user: Omit<User, 'id'>) {
            const userToEdit = this.list.find(user => user.id === id);
            if (!userToEdit) return;
            userToEdit.fullName = user.fullName;
            userToEdit.dateOfBirth = user.dateOfBirth;
            userToEdit.email = user.email;
            userToEdit.phone = user.phone;
        },
        removeUser(id: User['id']) {
            this.list = this.list.filter(user => user.id !== id);
        }
    }
})
