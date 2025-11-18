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
    (value: Date | null) => {
      if (value) return true;
      return 'Birth date is required.';
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
  ]
