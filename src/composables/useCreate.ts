import { useUserStore } from '../entities/user/model/useUserStore';
import { v4 as uuidv4 } from 'uuid';

export function useCreate() {
  const store = useUserStore();
  const fullName = ref('');
  const dateOfBirth = ref('');
  const phone = ref('');
  const email = ref('');

  async function addUserFunc() {
    store.addUser({
      fullName: fullName.value,
      dateOfBirth: dateOfBirth.value,
      email: email.value,
      phone: phone.value,
      id: uuidv4(),
    })
  }

  return {
    fullName,
    dateOfBirth,
    phone,
    email,
    addUserFunc,
  }
}
