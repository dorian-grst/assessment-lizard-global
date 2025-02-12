import { GithubIcon } from 'lucide-react';
import { Button } from './shadcn/button';
import React from 'react';
import { ThemeSelect } from './theme-select';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const returnToHome = () => {
    navigate('/');
  };

  return (
    <nav className="flex flex-row gap-2">
      <Button asChild variant="outline" size="icon">
        <a href="https://github.com/dorian-grst" target="_blank">
          <GithubIcon />
        </a>
      </Button>
      <ThemeSelect />
    </nav>
  );
}

export default Navbar;
