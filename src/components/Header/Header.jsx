import { useWindowSize } from 'react-use';
import { useState } from 'react';

import MenuMobile from '../MenuMobile/MenuMobile.jsx';
import MenuMobileBtn from '../MenuMobileBtn/MenuMobileBtn.jsx';
import Menu from '../Menu/Menu.jsx';
import Logo from '../REUSABLE/Logo/Logo.jsx';

import css from './Header.module.css';

const Header = () => {
  const { width } = useWindowSize();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Logo addClass={css.logoWrap} />
        {width < 768 ? (
          <>
            <MenuMobile closeMenu={closeMenu} isOpenMenu={isOpenMenu} />
            <MenuMobileBtn openMenu={openMenu} />
          </>
        ) : (
          <Menu />
        )}
      </div>
    </header>
  );
};

export default Header;
