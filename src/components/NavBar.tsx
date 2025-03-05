
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-gray-700/30 px-4 py-2">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-crypto-accent to-crypto-secondary flex items-center justify-center shadow-glow-blue">
              <span className="text-white font-bold text-lg">Λ</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">          
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="border-crypto-accent text-crypto-accent hover:bg-crypto-accent/10">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-crypto-accent hover:bg-crypto-accent/90 text-white">
              <Link to="/#">English</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
