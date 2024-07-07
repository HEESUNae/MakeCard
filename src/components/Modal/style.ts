import styled from 'styled-components';

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .madal-container {
    background: #fff;
    width: 38rem;
    padding: 2rem;
    border-radius: 1rem;
    h4 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    .modal-alert {
      font-size: 1.3rem;
      color: red;
    }
    .modal-btns {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1.6rem;
    }
  }
`;
