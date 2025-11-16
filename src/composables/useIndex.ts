import { ref } from 'vue';
import { useUserStore } from '../entities/user/model/useUserStore';

export function useIndex() {
    const store = useUserStore();
    const search = ref('');
    const headers = [
        { key: 'fullName', title: 'FullName' },
        { key: 'dateOfBirth', title: 'DateOfBirth' },
        { key: 'email', sortable: false, title: 'Email' },
        { key: 'phone', sortable: false, title: 'Phone' },
    ]

    const userList = store.list;

    return {
        search,
        headers,
        userList,
    }
}
