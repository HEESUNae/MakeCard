import styled from 'styled-components';
import { FontStyle } from '../../App';

interface StyledCardProps {
  $bgColor?: string;
  $bgImg?: string;
  $fontStyle: FontStyle;
}

export const StyledCard = styled.div<StyledCardProps>`
  width: 38.4rem;
  height: 30rem;
  background: url(${(props) => props.$bgImg}) no-repeat 50% 50%;
  background-color: ${(props) => props.$bgColor};
  border-radius: 1rem;
  padding: 2rem;
  background-size: cover;
  border: 0.1rem solid #edeff7;
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    background: transparent;
    font-weight: ${(props) => (props.$fontStyle.fontWeight ? 'bold' : 'normal')};
    text-shadow: ${(props) => (props.$fontStyle.textShadow ? '1px 1px 2px black' : 'none')};
    color: ${(props) => (props.$fontStyle.fontColor ? 'white' : 'black')};
    font-size: ${(props) => props.$fontStyle.fontSize}px;
    font-family: ${(props) => props.$fontStyle.fontfamily};
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
