import React from 'react';
import { SketchPicker } from 'react-color';
import { StyledColorPicker } from './style';

interface ColorPickerProps {
  background?: string;
  handleBgColor?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ background, handleBgColor }) => {
  return (
    <StyledColorPicker>
      <SketchPicker color={background} onChangeComplete={(color) => handleBgColor && handleBgColor(color.hex)} />
    </StyledColorPicker>
  );
};

export default ColorPicker;
