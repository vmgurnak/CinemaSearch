import { Suspense } from 'react';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import ButtonUp from '../ButtonUp/ButtonUp.jsx';
import Loader from '../Loader/Loader.jsx';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <Footer />
      <ButtonUp />
    </div>
  );
};

export default Layout;
