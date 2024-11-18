import CloseButton from '../REUSABLE/CloseButton/CloseButton.jsx';

import css from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <CloseButton addClass={css.btnClose} onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
