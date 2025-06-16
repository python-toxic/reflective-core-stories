
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = ({ onDarkSection }: { onDarkSection: boolean }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
    scrolled ? 'bg-brand-beige/90 backdrop-blur-sm shadow-lg shadow-black/5' : 'bg-transparent',
    onDarkSection && !scrolled ? 'bg-transparent shadow-none' : '',
    onDarkSection && scrolled ? 'bg-brand-navy/10 backdrop-blur-sm' : ''
  );

  const logoClasses = cn(
    'font-serif text-xl font-bold transition-colors',
     onDarkSection && !scrolled ? 'text-brand-beige' : 'text-brand-navy',
  );

  return (
    <header className={navClasses}>
      <nav className="container mx-auto flex items-center justify-center p-4 h-16 relative">
        <div className="flex items-center space-x-3">
          <span className={logoClasses}>
            Reflective Core
          </span>
          <span className={cn(
            "italic text-lg font-light transition-colors",
            onDarkSection && !scrolled ? 'text-brand-beige/60' : 'text-brand-navy/60'
          )}>/</span>
          <Link to="/login">
            <Button variant="ghost" className={cn(
              "transition-all duration-200 hover:bg-transparent",
              onDarkSection && !scrolled 
                ? 'text-brand-beige hover:text-brand-beige/70 hover:bg-brand-beige/10' 
                : 'text-brand-navy hover:text-warm-gray hover:bg-warm-gray/10'
            )}>
              Sign In
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
