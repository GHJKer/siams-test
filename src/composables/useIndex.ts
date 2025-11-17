import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../entities/user/model/useUserStore';

export function useIndex() {
    const store = useUserStore();
    const search = ref('');
    const isShowSnackBar = ref(false);
    const snackBarTitle = ref('Success!');
    const snackBarText = ref('The has been edited');
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
        isShowSnackBar,
        snackBarTitle,
        snackBarText,
    }
}
