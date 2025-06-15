
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import NavMenu from './NavMenu';

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
    onDarkSection && 'bg-brand-navy/10 backdrop-blur-sm shadow-none',
  );

  const linkClasses = cn(
    'font-sans text-sm transition-colors',
    onDarkSection ? 'text-brand-beige hover:text-brand-beige/80' : 'text-brand-navy hover:text-brand-crimson',
  );

  const logoClasses = cn(
    'font-serif text-xl font-bold transition-colors',
     onDarkSection ? 'text-brand-beige' : 'text-brand-navy',
  );

  return (
    <header className={navClasses}>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className={logoClasses}>
          Reflective Core
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className={linkClasses}>Features</a>
          <a href="#" className={linkClasses}>Pricing</a>
          <a href="#" className={linkClasses}>About</a>
          <a href="#" className={linkClasses}>Sign In</a>
          <Button
            variant={onDarkSection ? "outline" : "default"}
            className={cn({
              "text-brand-beige border-brand-beige/50 hover:bg-brand-beige hover:text-brand-navy": onDarkSection,
              "shadow-lg shadow-brand-navy/20": !onDarkSection
            })}
          >
            Start Writing
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <NavMenu onDarkSection={onDarkSection} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
