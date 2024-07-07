import React from 'react';
import ReactSwitch from 'react-switch';

interface SwitchProps {
  onChange: () => void;
  checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ onChange, checked }) => {
  return (
    <label>
      <ReactSwitch
        onChange={onChange}
        checked={checked}
        onColor={'#000'}
        offColor={'#ddd'}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </label>
  );
};

export default Switch;
