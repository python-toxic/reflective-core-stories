
import React from 'react';
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const InvitationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={cn(
        "scroll-section relative flex flex-col justify-center min-h-screen bg-brand-navy text-brand-beige p-8 opacity-0",
        inView && "animate-slow-pop-up"
      )}
    >
      <div className="flex-grow flex items-center justify-center text-center">
        <div className="animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold">
            Begin the quiet revolution within you.
          </h2>
          <p className="font-sans text-lg md:text-xl mt-6">
            It starts with one entry.
          </p>
          <div className="mt-12" style={{ animation: `fade-in-up 1s ease-out 1s forwards`, opacity: 0 }}>
            <a href="#" className="font-sans text-lg cta-underline pb-1 tracking-wider">
              Start Writing Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default InvitationSection;
