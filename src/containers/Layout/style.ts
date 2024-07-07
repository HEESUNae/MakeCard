import styled from 'styled-components';

export const StyledLayout = styled.div`
  .card-edit-contents {
    display: flex;
    gap: 2rem;
    align-items: self-start;
    justify-content: center;
  }

  @media (max-width: 830px) {
    .card-edit-contents {
      flex-direction: column;
      width: fit-content;
    }
  }
  @media (max-width: 400px) {
    .card-edit-contents {
      margin: 2rem;
    }
    .card-container {
      width: 100%;
    }
  }
`;
