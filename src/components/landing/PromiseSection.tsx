import React from 'react';

const PromiseSection = () => {
  return (
    <section className="scroll-section flex items-center justify-center min-h-screen bg-brand-beige text-brand-navy p-8 md:p-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-6xl font-bold"
          style={{ 
            color: "hsl(var(--brand-crimson-dark))",
            textShadow: "0 4px 12px rgba(0,0,0,0.25)"
          }}>From Thoughts to Clarity</h2>
          <p className="font-sans text-lg md:text-xl mt-6 max-w-md">
            Reflective Core helps you transform fleeting feelings into lasting understanding.
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Abstract visual placeholder */}
          <div className="w-full h-64 relative">
             <span className="absolute top-1/4 left-0 w-3/4 h-px bg-brand-navy/30 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
             <span className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-brand-navy/60 animate-pulse" style={{ animationDelay: '0.8s' }}></span>
             <span className="absolute top-3/4 left-0 w-1/2 h-px bg-brand-navy/30 animate-pulse" style={{ animationDelay: '1s' }}></span>
             <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute top-0 left-0 text-brand-crimson" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,150 Q150,20 250,100 T350,150" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
