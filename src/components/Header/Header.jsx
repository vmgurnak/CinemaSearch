import { NavLink } from 'react-router-dom';
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
        <nav className={css.headerList}>
          <NavLink className={buildLinkClass} to="/">
            <ImFilm />
            Filmoteka
          </NavLink>
          <NavLink className={buildLinkClass} to="/">
            TRENDING
          </NavLink>
          <NavLink className={buildLinkClass} to="/topmovies">
            TOPRATED
          </NavLink>
          <NavLink className={buildLinkClass} to="/popularmovies">
            POPULAR
          </NavLink>
          <NavLink className={buildLinkClass} to="/movies">
            SEARCH
          </NavLink>
          <NavLink className={buildLinkClass} to="/library">
            MY LIBRARY
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
