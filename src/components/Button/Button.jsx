import clsx from 'clsx';

import css from './Button.module.css';

const Button = ({ handleClick, title, addClass }) => {
  return (
    <div className={css.btnWrap}>
      <button className={clsx(css.btn, addClass)} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
