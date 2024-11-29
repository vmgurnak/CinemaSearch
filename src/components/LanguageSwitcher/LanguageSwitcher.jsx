import { useTranslation } from 'react-i18next';

import clsx from 'clsx';

import { LOCALS } from '../../i18n/lng-constant.js';

import css from './LanguageSwitcher.module.css';

const LanguageSwitcher = ({ addClass, btnClass }) => {
  const { i18n } = useTranslation();

  return (
    <div className={clsx(css.languageSwitcherWrap, addClass)}>
      <button
        className={clsx(btnClass, css.languageSwitcherBtn)}
        disabled={i18n.language === LOCALS.EN}
        onClick={() => i18n.changeLanguage(LOCALS.EN)}
      >
        EN
      </button>
      <button
        className={clsx(btnClass, css.languageSwitcherBtn)}
        disabled={i18n.language === LOCALS.UK}
        onClick={() => i18n.changeLanguage(LOCALS.UK)}
      >
        UK
      </button>
    </div>
  );
};

export default LanguageSwitcher;
