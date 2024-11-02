import clsx from 'clsx';

import Menu from '../Menu/Menu';
import CloseButton from '../REUSABLE/CloseButton/CloseButton.jsx';
import Logo from '../REUSABLE/Logo/Logo.jsx';

import css from './MenuMobile.module.css';

const MenuMobile = ({ closeMenu, isOpenMenu }) => {
  return (
    <div className={clsx(css.menuMobile, isOpenMenu && css.menuMobileOpen)}>
      <Logo addClass={css.logoLink} onClick={closeMenu} />
      <CloseButton onClose={closeMenu} />
      <Menu closeMenu={closeMenu} />
    </div>
  );
};

export default MenuMobile;
