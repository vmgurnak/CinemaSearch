import { RxHamburgerMenu } from 'react-icons/rx';

import css from './MenuMobileBtn.module.css';

const MenuMobileBtn = ({ openMenu }) => {
  return (
    <button className={css.btnMenu} onClick={openMenu}>
      <RxHamburgerMenu className={css.iconMenu} />
    </button>
  );
};

export default MenuMobileBtn;
