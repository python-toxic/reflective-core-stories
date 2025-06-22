import React from 'react';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface InvitationSectionProps {
  inView: boolean;
}

const InvitationSection = React.forwardRef<HTMLElement, InvitationSectionProps>(({ inView }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "scroll-section relative flex flex-col justify-center min-h-screen text-white p-8 opacity-0 overflow-hidden",
        inView && "animate-slow-pop-up"
      )}
    >
      {/* Crimson dark background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0a1833, #142850)',
        }}
      />

      <div className="flex-grow flex items-center justify-center text-center relative z-10">
        <div className="animate-fade-in-up p-12">
          <h2 
            className="font-canela text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ 
              color: "hsl(var(--brand-beige ))",
              textShadow: "0 4px 16px rgba(0,0,0,0.4)"
            }}
          >
            Begin the quiet revolution within you.
          </h2>
          <p className="font-serif text-lg md:text-xl mb-12 text-white/90">
            It starts with one entry.
          </p>
          <div 
            className="mt-12" 
            style={{ animation: `fade-in-up 1s ease-out 1s forwards`, opacity: 0 }}
          >
            <Link 
              to="/login" 
              className="font-canela  text-lg cta-underline pb-1 tracking-wider hover:text-white/90 transition-colors duration-300"
            >
              Start Writing Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
});

InvitationSection.displayName = "InvitationSection";

export default InvitationSection;
