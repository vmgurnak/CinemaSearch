import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { ImFilm } from 'react-icons/im';
import clsx from 'clsx';

import css from './Logo.module.css';

const Logo = ({ addClass, onClick }) => {
  // const { width } = useWindowSize();

  return (
    <Link
      className={clsx(css.logoWrap, addClass)}
      to="/trending"
      onClick={onClick}
    >
      <ImFilm className={css.logo} />
      <span className={css.logoText}>Filmoteka</span>
      {/* {width < 768 && <span className={css.logoText}>Filmoteka</span>} */}
      {/* {width >= 900 && <span className={css.logoText}>Filmoteka</span>} */}
    </Link>
  );
};

export default Logo;
