  export const nameRules = [
    (value: string) => {
      if (value) return true;
      return 'Name is required.';
    },
      (value: string) => {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;

    if (nameRegex.test(value)) return true;

    return 'Name must contain only letters and spaces.';
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
  (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');

    if (digitsOnly.length === 11) return true;

    return 'Phone number must be complete +7 (XXX) XXX-XX-XX.';
  },
  (value: string) => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

    if (phoneRegex.test(value)) return true;

    return 'Phone number format is invalid.';
  },
]
