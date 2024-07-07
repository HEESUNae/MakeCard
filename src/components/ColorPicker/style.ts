import styled from 'styled-components';

export const StyledColorPicker = styled.div`
  .sketch-picker {
    width: 35rem !important;
    display: grid;
    gap: 0.6rem 1rem;
    padding: 0px !important;
    box-shadow: none !important;
    overflow: hidden;
    > div:nth-child(1) {
      width: 13rem !important;
      grid-row: 1 / span 3;
    }
    > div:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    > div:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    > div:nth-child(4) {
      grid-row: 3 / 4;
      grid-column: 2 / 3;
    }
  }
  @media (max-width: 400px) {
    .sketch-picker {
      width: 100% !important;
    }
  }
`;
