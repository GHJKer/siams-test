import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../entities/user/store/useUserStore';

export function useIndex() {
    const store = useUserStore();
    const search = ref('');
    const headers = [
        { key: 'fullName', title: 'Ful name' },
        { key: 'dateOfBirth', title: 'Date of birth' },
        { key: 'email', title: 'E-mail', sortable: false },
        { key: 'phone', title: 'Phone', sortable: false },
        { key: 'actions', sortable: false },
    ]

    const userList = storeToRefs(store).list;

    return {
        search,
        headers,
        userList,
    }
}
