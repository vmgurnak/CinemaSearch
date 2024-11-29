import clsx from 'clsx';

import Menu from '../Menu/Menu';
import CloseButton from '../REUSABLE/CloseButton/CloseButton.jsx';
import Logo from '../REUSABLE/Logo/Logo.jsx';

import css from './MenuMobile.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

const MenuMobile = ({ closeMenu, isOpenMenu }) => {
  return (
    <div className={clsx(css.menuMobile, isOpenMenu && css.menuMobileOpen)}>
      <Logo addClass={css.logoLink} onClick={closeMenu} />
      <CloseButton addClass={css.btnClose} onClose={closeMenu} />
      <Menu closeMenu={closeMenu} />
      <LanguageSwitcher
        addClass={css.languageSwitcherWrap}
        btnClass={css.languageSwitcherBtn}
      />
    </div>
  );
};

export default MenuMobile;
