import React from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.scss';
import styled from 'styled-components';

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
    <Wrapper className={clsx(error && styles.ErrorWrapper)} onClick={handleClick}>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @include description;

  position: relative;

  width: 100%;
  height: 2rem;
  min-height: 2rem;
  padding: 0 1rem 0 0;

  background-color: transparent;
  border-bottom: 0.1rem solid $gray-45;

  transition: all 0.3s ease-in-out;
  will-change: border-color;

  &:hover,
  &:focus-within {
    border-bottom-color: $gray-90;

    & > input {
      &::placeholder {
        color: $gray-90;
      }
    }
  }

  & > input {
    font-size: 1.5rem;
    line-height: 2.4rem;
    color: $gray-90;

    width: 100%;
    height: 100%;

    cursor: inherit;
    background-color: transparent;
    border: none;

    &::placeholder {
      @include description;
      color: $gray-60;

      transition: color 0.3s ease-in-out;
      will-change: color;
    }

    &:focus {
      outline: none;
    }
  }
`;

export default Input;
