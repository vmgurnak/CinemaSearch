import { Suspense } from 'react';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import css from './Layout.module.css';
import Loader from '../Loader/Loader.jsx';

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
