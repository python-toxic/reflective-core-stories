
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="scroll-section relative flex items-center justify-center min-h-screen bg-brand-beige text-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 animate-ink-flow"></div>
      <div className="relative text-center p-8 z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold">
          Unlock Your Inner Narrative.
        </h1>
        <p className="font-sans text-lg md:text-xl lg:text-2xl mt-6 max-w-2xl mx-auto font-light">
          Where daily reflections meet profound insights.
        </p>
        <div className="mt-12" style={{ animation: `fade-in-up 1s ease-out 1s forwards`, opacity: 0 }}>
          <Link to="/login" className="font-sans text-lg cta-underline pb-1 tracking-wider">
            Start Writing Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
