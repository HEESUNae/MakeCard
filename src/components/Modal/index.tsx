import React from 'react';
import { StyledModal } from './style';
import Button from '../Button';

interface ModalProps {
  children: React.ReactNode;
  onClick: (state?: string) => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClick }) => {
  return (
    <StyledModal>
      <div className="madal-container">
        {children}
        <div className="modal-btns">
          <Button title="닫기" onClick={() => onClick('close')} />
          <Button title="적용" btnStyle="primary" onClick={onClick} />
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
