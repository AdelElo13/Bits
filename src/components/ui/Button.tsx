import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  withArrow?: boolean;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  href, 
  onClick, 
  withArrow,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-purple-900";
  const styles = variant === 'primary' 
    ? `bg-yellow-400 text-black hover:bg-yellow-300 ${baseStyles} ${className}`
    : `border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 ${baseStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />}
    </>
  );

  if (href && href.startsWith('#')) {
    return (
      <a 
        href={href} 
        className={styles} 
        onClick={onClick}
        role="button"
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link 
        to={href} 
        className={styles} 
        onClick={onClick}
        role="button"
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={styles} 
      onClick={onClick}
    >
      {content}
    </button>
  );
}