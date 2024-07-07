import styled from 'styled-components';

export const StyledButton = styled.div<{ $btnStyle?: string }>`
  button {
    background: ${(props) => (props.$btnStyle === 'primary' ? '#333' : 'transparent')};
    color: ${(props) => (props.$btnStyle === 'primary' ? '#fff' : '#333')};
    padding: 1rem 1.4rem;
    border: 0.1rem solid #333;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
