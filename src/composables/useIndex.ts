import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../entities/user/store/useUserStore';
import { v4 as uuidv4 } from 'uuid';
import type { User } from '../entities/user/types/user'

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

	const initialUserList: User[] = [
		{ fullName: 'Иванов Иван Иванович', dateOfBirth: '1990-05-15', email: 'ivanov@example.com', phone: '+7-999-123-45-67', id: ''},
		{ fullName: 'Петрова Анна Сергеевна', dateOfBirth: '1985-12-03', email: 'petrova@example.com', phone: '+7-999-234-56-78', id: ''},
		{ fullName: 'Сидоров Алексей Петрович', dateOfBirth: '1995-07-22', email: 'sidorov@example.com', phone: '+7-999-345-67-89,',id: '' }
	]

	const userList = storeToRefs(store).list;

	function populateList() {
		for (const user of initialUserList) {
			user.id = uuidv4();
			store.addUser(user);
		}
	}

	return {
		search,
		headers,
		userList,
		populateList,
	}
}
