import React from 'react';
import ReactSwitch from 'react-switch';

interface SwitchProps {
  onChange: () => void;
  checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ onChange, checked }) => {
  return (
    <ReactSwitch
      onChange={onChange}
      checked={checked}
      onColor={'#000'}
      offColor={'#ddd'}
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};

export default Switch;
