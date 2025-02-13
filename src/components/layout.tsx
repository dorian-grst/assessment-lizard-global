import React from 'react';
import Header from './header';
import { Outlet } from 'react-router';

function Layout() {
  // The layout component is a wrapper for all the different routes in the application.
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
