import { FC } from 'react';
import Header from '../components/header/Header';

import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import ErrorPage from './error/Error';
import SearchBar from '../components/search-bar/SeacrhBar';

const Layout: FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <ToastContainer />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <SearchBar />
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};
export default Layout;
