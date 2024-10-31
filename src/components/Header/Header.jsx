import { Link, NavLink } from 'react-router-dom';
import { ImFilm } from 'react-icons/im';

import clsx from 'clsx';

import css from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.headerLink], isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link className={css.logoWrap} to="/trending">
          <ImFilm className={css.logo} />
          <span className={css.logoText}>Filmoteka</span>
        </Link>
        <nav className={css.headerList}>
          <NavLink className={buildLinkClass} to="/trending">
            TRENDING
          </NavLink>
          <NavLink className={buildLinkClass} to="/toprated">
            TOP RATED
          </NavLink>
          <NavLink className={buildLinkClass} to="/popular">
            POPULAR
          </NavLink>
          <NavLink className={buildLinkClass} to="/upcoming">
            UPCOMING
          </NavLink>
          <NavLink className={buildLinkClass} to="/search">
            SEARCH
          </NavLink>
          <NavLink className={buildLinkClass} to="/favorites">
            FAVORITES
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
