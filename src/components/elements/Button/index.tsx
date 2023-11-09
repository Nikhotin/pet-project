import React from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.scss';

export enum ButtonTypes {
  Button = 'button',
  Text = 'text',
}

export enum ButtonVariables {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export enum ButtonSizes {
  Medium = 'Medium',
  Large = 'Large',
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: ButtonTypes;
  variable?: ButtonVariables;
  size?: ButtonSizes;
  fullWidth?: boolean;
}

function Button({
  text,
  variable = ButtonVariables.Primary,
  type = ButtonTypes.Button,
  size = ButtonSizes.Medium,
  fullWidth = false,
  onClick,
}: ButtonProps) {
  return (
    <div
      className={clsx(
        type === ButtonTypes.Text && styles.TextButton,
        type === ButtonTypes.Button && styles.Button,
        styles[variable],
        styles[size],
        fullWidth && styles.FullWidth,
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Button;
