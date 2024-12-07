import clsx from 'clsx';
import { useEffect } from 'react';

import CloseButton from '../REUSABLE/CloseButton/CloseButton.jsx';

import css from './Modal.module.css';

const Modal = ({ isModalOpen, afterOpen, beforeClose, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        css.modalOverlay,
        isModalOpen && css.modalOpen,
        afterOpen && css.afterOpen,
        beforeClose && css.beforeClose
      )}
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <CloseButton addClass={css.btnClose} onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
