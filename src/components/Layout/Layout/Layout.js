import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
