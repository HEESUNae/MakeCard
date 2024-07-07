import React from 'react';
import { StyledCard } from './style';
import { FontStyle } from '../../App';

interface CardProps {
  bgColor: string;
  bgImg: string;
  fontStyle: FontStyle;
}

const Card: React.FC<CardProps> = ({ bgColor, fontStyle, bgImg }) => {
  return (
    <StyledCard $bgColor={bgColor} $bgImg={bgImg} $fontStyle={fontStyle}>
      <textarea defaultValue={'안녕하세요'}></textarea>
    </StyledCard>
  );
};

export default Card;
