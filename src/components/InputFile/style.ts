import styled from 'styled-components';

export const StyledInputFile = styled.div`
  input[type='file'] {
    display: none;
    + label {
      background: #333;
      color: #fff;
      padding: 1rem 1.4rem;
      border: 0.1rem solid #333;
      border-radius: 0.8rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`;
