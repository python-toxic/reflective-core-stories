
import React from 'react';

const AISection = () => {
  return (
    <section className="scroll-section flex items-center justify-center min-h-screen bg-brand-beige text-brand-navy p-8 md:p-16">
       <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up order-2 md:order-1">
          <h2 className="font-serif text-4xl md:text-6xl font-bold">Let AI Help You See the Unseen</h2>
          <p className="font-sans text-lg md:text-xl mt-6 max-w-md">
            Patterns in your reflections gently emerge, revealing emotional trends you may never notice.
          </p>
        </div>
        <div className="flex items-center justify-center animate-fade-in-up order-1 md:order-2" style={{ animationDelay: '0.3s' }}>
           {/* Abstract visualization */}
           <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-brand-navy/20 flex items-center justify-center relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-brand-navy/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute w-2 h-2 bg-brand-crimson rounded-full animate-glow top-4 left-1/2"></div>
              <div className="absolute w-2 h-2 bg-brand-crimson rounded-full animate-glow bottom-4 left-1/2" style={{ animationDelay: '1s' }}></div>
              <div className="absolute w-1 h-1 bg-brand-navy rounded-full animate-glow top-1/2 right-8"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
