import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef(
  (
    { className, value, label, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={`${styles.container} ${className}`}>
        {label && <p className={styles.label}>{label}</p>}
        <input
          value={value}
          className={clsx(styles.input, error && styles.input_error)}
          {...rest}
          ref={ref}
        />
        {error && <p className={styles.error}>{error}</p>}
      </label>
    );
  }
);

export default Input;
