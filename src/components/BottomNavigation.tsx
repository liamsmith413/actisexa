
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Repeat, Wallet, User } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/marketplace', label: 'Markets', icon: BarChart2 },
    { path: '/exchange', label: 'Trade', icon: Repeat },
    { path: '/wallet', label: 'Assets', icon: Wallet },
    { path: '/account', label: 'Account', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex justify-around">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-3 px-4 ${
                isActive ? 'text-crypto-accent' : 'text-muted-foreground'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-crypto-accent' : 'text-muted-foreground'} />
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-6 h-0.5 bg-crypto-accent rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
