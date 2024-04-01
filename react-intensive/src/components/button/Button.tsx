import React, { ReactEventHandler } from 'react';
import buttonStyle from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: ReactEventHandler;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={buttonStyle.item} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
