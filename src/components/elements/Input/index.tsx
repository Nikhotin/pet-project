import React from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  onBlur?: (val: string, e: React.FocusEvent) => void;
  onChange?: (val: string, e: React.ChangeEvent) => void;
}

function Input({ value, name, type, placeholder, error, disabled, onChange, onBlur }: InputProps) {
  const inputRef = React.useRef(null) as React.RefObject<HTMLInputElement>;

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={clsx(styles.Wrapper, error && styles.ErrorWrapper)} onClick={handleClick}>
      <input
        ref={inputRef}
        aria-label={name}
        tabIndex={0}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={(e) => onBlur?.(e.target.value, e)}
        onChange={(e) => onChange?.(e.target.value, e)}
      />
    </div>
  );
}

export default Input;
