import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      to={href} 
      className="hover:text-yellow-400 transition-colors text-white"
    >
      {children}
    </Link>
  );
}