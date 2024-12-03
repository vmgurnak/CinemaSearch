import clsx from 'clsx';
import { FaArrowUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

import css from './ButtonUp.module.css';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={clsx(css.btn, isVisible && css.visible)}
      onClick={handleClick}
    >
      <FaArrowUp className={css.icon} />
    </button>
  );
};

export default ButtonUp;
