import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <header className="flex flex-row justify-between h-1/12 w-full">
      <div className='className="flex flex-col gap-2'>
        <h2 className="text-2xl font-bold tracking-tight">
          Assessment Lizard Global
        </h2>
        <p className="text-muted-foreground">Here is my work !</p>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
