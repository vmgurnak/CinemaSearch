import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './MainMenu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const MainMenu = ({ closeMenu }) => {
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
    </nav>
  );
};

export default MainMenu;
