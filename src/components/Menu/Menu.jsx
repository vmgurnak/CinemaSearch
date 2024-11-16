import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './Menu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const Menu = ({ closeMenu }) => {
  return (
    <nav className={css.menuList}>
      <NavLink className={buildLinkClass} to="/" onClick={closeMenu}>
        TRENDING
      </NavLink>
      <NavLink className={buildLinkClass} to="/toprated" onClick={closeMenu}>
        TOPRATED
      </NavLink>
      <NavLink className={buildLinkClass} to="/popular" onClick={closeMenu}>
        POPULAR
      </NavLink>
      <NavLink className={buildLinkClass} to="/upcoming" onClick={closeMenu}>
        UPCOMING
      </NavLink>
      <NavLink className={buildLinkClass} to="/search" onClick={closeMenu}>
        SEARCH
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites" onClick={closeMenu}>
        FAVORITES
      </NavLink>
    </nav>
  );
};

export default Menu;
