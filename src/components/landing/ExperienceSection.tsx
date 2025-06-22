import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="scroll-section flex flex-col items-center justify-center min-h-screen bg-brand-beige text-brand-navy p-8 md:p-16">
      <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
        <h2 className="font-serif text-4xl md:text-6xl font-bold"
        style={{ 
          color: "hsl(var(--brand-crimson-dark))",
          textShadow: "0 4px 12px rgba(0,0,0,0.25)"
        }}>
          Write Freely. Breathe Deeply.</h2>
        <p className="font-sans text-lg md:text-xl mt-6">
          Your private space to express, without judgment or noise.
        </p>
      </div>
      <div className="w-full max-w-4xl mt-12 bg-white/50 p-6 md:p-10 rounded-lg shadow-2xl shadow-black/10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="w-full h-64 md:h-80 space-y-4">
            <div className="h-4 bg-brand-navy/10 rounded-full w-3/4"></div>
            <div className="h-4 bg-brand-navy/10 rounded-full w-full"></div>
            <div className="h-4 bg-brand-navy/10 rounded-full w-5/6"></div>
            <div className="h-4 bg-brand-navy/10 rounded-full w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
