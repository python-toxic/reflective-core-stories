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
    'font-serif text-2xl font-bold transition-colors', // Increased text size from text-xl to text-2xl
    onDarkSection && !scrolled ? 'text-brand-beige' : 'text-brand-navy',
  );

  return (
    <header className={navClasses}>
      <nav className="container mx-auto flex items-center justify-center p-4 h-16 relative">
        {/* Adjusted space-x to bring elements closer initially */}
        <div className="flex items-center space-x-0.3"> {/* Changed from space-x-3 to space-x-1 */}
          {/* Reflective Core with Glass Morphism (static size) */}
          <div
            className={cn(
              logoClasses,
              "relative group px-2 py-1 rounded-lg cursor-pointer overflow-hidden"
            )}
          >
            Reflective Core
          </div>

          <span className={cn(
            "italic text-xl font-light transition-colors", // Increased text size from text-lg to text-xl
            onDarkSection && !scrolled ? 'text-brand-beige/60' : 'text-brand-navy/60'
          )}>/</span>

          {/* Sign In button with Glass Morphism (expanding) */}
          <Link to="/login">
            <Button
              variant="ghost"
              className={cn(
                "bg-transparent hover:bg-transparent px-1 py-1 ml-3 shadow-none",
                "font-canela font-bold transition-colors text-lg", // Increased text size for button
                onDarkSection && !scrolled
                  ? "text-brand-beige hover:text-brand-beige"
                  : "text-brand-navy hover:text-brand-crimson"
              )}
            >
              <span className="relative z-10 cta-underline pb-0.7 tracking-wider">Sign In</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;