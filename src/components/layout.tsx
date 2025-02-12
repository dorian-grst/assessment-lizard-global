import React from 'react';
import Header from './header';
import { Outlet } from 'react-router';

function Layout() {
  // The layout component is a wrapper for all the different routes in the application.
  return (
    <div className="h-screen flex flex-col gap-8 p-8 items-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
