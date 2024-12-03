import { Link } from 'react-router-dom';
import { ImFilm } from 'react-icons/im';
import clsx from 'clsx';

import css from './Logo.module.css';

const Logo = ({ addClass, onClick }) => {
  // const { width } = useWindowSize();

  return (
    <Link className={clsx(css.logoWrap, addClass)} to="/" onClick={onClick}>
      <ImFilm className={css.logo} />
      <span className={css.logoText}>Movies</span>
    </Link>
  );
};

export default Logo;
