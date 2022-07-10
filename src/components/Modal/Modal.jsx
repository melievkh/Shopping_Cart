import React from 'react';
import { ModalBackground, ModalContainer } from './Modal.style';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <ModalBackground onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose}>Close</button>
          {children}
        </ModalContainer>
      </ModalBackground>
    )
  );
};

export default Modal;
