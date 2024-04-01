import { ChangeEvent, FormEvent, HTMLProps, useState } from 'react';
import styles from './Form.module.scss';
import Input, { InputProps } from '../input/Input';
import Button from '../button/Button';
import { validateForm } from '../../utils/formValidator';
import { FormRecord } from '../../types/types';
import clsx from 'clsx';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  inputs: InputProps[];
  submitHandler?: (form: FormRecord) => void;
  error?: string;
  submitText: string;
}

const Form = ({
  inputs,
  submitHandler,
  error,
  submitText,
  className,
}: FormProps) => {
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { isValid, errors } = validateForm(formJson);
    if (isValid) {
      submitHandler?.(formJson);
      return;
    }
    setInputErrors(errors);
  };

  const clearError = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setInputErrors((prevState) => ({
      ...prevState,
      [input.name]: '',
    }));
  };

  return (
    <div className={clsx(styles.container, className)}>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        {inputs.map(({ name, ...inputProps }) => (
          <Input
            {...inputProps}
            key={name}
            className={styles.input}
            name={name}
            error={name && inputErrors[name]}
            onChange={clearError}
          />
        ))}
        <Button className={styles.button}>{submitText}</Button>
      </form>
    </div>
  );
};

export default Form;
