import React from 'react';
import { StyledInputNumber } from './style';

interface InputNumberProps {
  min: number;
  max?: number;
  defaultValue: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({ onChange, min, max, defaultValue }) => {
  return (
    <StyledInputNumber>
      <input type="number" min={min} max={max} defaultValue={defaultValue} onChange={onChange} />
    </StyledInputNumber>
  );
};

export default InputNumber;
