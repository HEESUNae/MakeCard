import React from 'react';
import { StyledButton } from './style';

interface ButtonProps {
  type?: 'button' | 'submit';
  title: string;
  btnStyle?: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', title, btnStyle, onClick }) => {
  return (
    <StyledButton $btnStyle={btnStyle}>
      <button type={type} onClick={onClick}>
        {title}
      </button>
    </StyledButton>
  );
};

export default Button;
