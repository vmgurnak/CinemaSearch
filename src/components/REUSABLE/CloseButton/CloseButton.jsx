import clsx from 'clsx';

import { IoMdClose } from 'react-icons/io';

import css from './CloseButton.module.css';

const CloseButton = ({ onClose, addClass }) => {
  return (
    <button className={clsx(css.btnClose, addClass)} onClick={onClose}>
      <IoMdClose className={css.iconBtnClose} />
    </button>
  );
};

export default CloseButton;
