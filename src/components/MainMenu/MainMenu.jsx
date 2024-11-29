import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import css from './MainMenu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const MainMenu = ({ closeMenu }) => {
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
    </nav>
  );
};

export default MainMenu;
