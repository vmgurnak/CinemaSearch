import Logo from '../REUSABLE/Logo/Logo.jsx';

import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <Logo addClass={css.logoWrap} />
      </div>
    </footer>
  );
};

export default Footer;
