import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import css from './Menu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const Menu = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <nav className={css.menuList}>
      <NavLink className={buildLinkClass} to="/" onClick={closeMenu}>
        {t('trending')}
      </NavLink>
      <NavLink className={buildLinkClass} to="/toprated" onClick={closeMenu}>
        {t('toprated')}
      </NavLink>
      <NavLink className={buildLinkClass} to="/popular" onClick={closeMenu}>
        {t('popular')}
      </NavLink>
      <NavLink className={buildLinkClass} to="/upcoming" onClick={closeMenu}>
        {t('upcoming')}
      </NavLink>
      <NavLink className={buildLinkClass} to="/search" onClick={closeMenu}>
        {t('search')}
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites" onClick={closeMenu}>
        {t('favorites')}
      </NavLink>
    </nav>
  );
};

export default Menu;
