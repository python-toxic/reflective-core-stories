
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center p-4 text-brand-beige/50 font-sans text-sm">
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-brand-beige">About</a>
        <a href="#" className="hover:text-brand-beige">Privacy</a>
        <a href="#" className="hover:text-brand-beige">Terms</a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Reflective Core. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
