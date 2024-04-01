import { FormRecord } from '../types/types';

enum ValidationErrorMessages {
  Required = 'Reqired',
}

interface FormValidator {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateForm = (form: FormRecord): FormValidator => {
  let isValid = true;
  const fields = Object.fromEntries(
    Object.entries(form).map(([k, v]) => {
      let isValidField;
      if (v instanceof File) {
        isValidField = !!v.name;
      } else {
        isValidField = !!v;
      }
      if (!isValidField) {
        isValid = false;
      }
      return [k, isValidField ? '' : ValidationErrorMessages.Required];
    })
  );

  return { isValid, errors: fields };
};
