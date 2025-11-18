import { useUserStore } from '../entities/user/store/useUserStore';
import type { User } from '../entities/user/types/user'
import { v4 as uuidv4 } from 'uuid';

export function useCreate() {
  const store = useUserStore();
    const formData = ref<Omit<User, 'id'>>({
      fullName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
    });

  async function addUserFunc() {
    store.addUser({
      ...formData.value,
      id: uuidv4(),
    })
  }

  return {
    formData,
    addUserFunc,
  }
}
