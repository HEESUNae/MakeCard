import React from 'react';
import { StyledInput } from './style';

interface InputProps {
  type?: 'text';
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, onChange, onBlur }) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur}></StyledInput>;
};

export default Input;
