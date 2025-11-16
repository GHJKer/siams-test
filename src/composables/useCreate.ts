  import { useUserStore } from '../entities/user/model/useUserStore';


  export function useCreate() {
      const store = useUserStore();
      const formRef = ref(null);
      const fullName = ref('');
      const dateOfBirth = ref('');
      const phone = ref('');
      const email = ref('');

    return {
        store,
        formRef,
        fullName,
        dateOfBirth,
        phone,
        email,
    }
  }
