  export const nameRules = [
    (value: string) => {
      if (value) return true;
      return 'Name is required.';
    },
    (value: string) => {
      if (value?.length <= 20) return true;
      return 'Name must be less than 20 characters.';
    },
  ]

  export const birthDateRules = [
    (value: string) => {
      if (value) return true;
      return 'Birth date is required.';
    },
    (value: string) => {
      if (/^\d{2}-\d{2}-\d{4}$/.test(value)) return true;
      return 'Birth date must be of type dd-mm-yyyy.';
    },
  ]

  export const emailRules = [
    (value: string) => {
      if (value) return true;
      return 'E-mail is required.';
    },
    (value: string) => {
      if (/.+@.+\..+/.test(value)) return true;
      return 'E-mail must be valid.';
    },
  ]

  export const phoneRules = [
    (value: string) => {
      if (!value) return 'Phone number is required.';
      return true;
    },
    (value: string) => {
      const phoneRegex = /^\+?7[- ]?\d{3}[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
      if (phoneRegex.test(value)) return true;
      return 'Phone number must be a valid Russian number (+7-XXX-XXX-XX-XX).';
    }
  ]
