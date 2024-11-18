import css from './Button.module.css';

const Button = ({ handleClick, title }) => {
  return (
    <div className={css.btnWrap}>
      <button className={css.btn} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
