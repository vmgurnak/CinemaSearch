import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './AddMenu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const AddMenu = ({ closeMenu }) => {
  return (
    <nav className={css.menuList}>
      <NavLink className={buildLinkClass} to="/search" onClick={closeMenu}>
        SEARCH
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites" onClick={closeMenu}>
        FAVORITES
      </NavLink>
    </nav>
  );
};

export default AddMenu;
