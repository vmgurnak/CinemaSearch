import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import css from './AddMenu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const AddMenu = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <nav className={css.menuList}>
      <NavLink className={buildLinkClass} to="/search" onClick={closeMenu}>
        {t('search')}
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites" onClick={closeMenu}>
        {t('favorites')}
      </NavLink>
    </nav>
  );
};

export default AddMenu;
