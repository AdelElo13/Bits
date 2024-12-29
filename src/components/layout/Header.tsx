import React from 'react';
import { Coins } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

export function Header() {
  return (
    <nav className="flex justify-between items-center py-6 px-6 bg-black/20">
      <div className="flex items-center space-x-2">
        <Coins className="w-8 h-8 text-yellow-400" />
        <span className="text-2xl font-bold">bit$</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#features">Features</NavLink>
        <NavLink href="/#roadmap">Roadmap</NavLink>
      </div>
    </nav>
  );
}