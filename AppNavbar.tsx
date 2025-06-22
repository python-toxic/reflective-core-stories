import React from "react"; // Removed useState, useEffect as scroll logic is removed for simplicity
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // Ensure cn utility is imported if used for class merging

const AppNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-sm border-b border-champagne/30">
      <nav className="container mx-auto flex items-center justify-between p-4 h-16 relative">
        {/* Left Side: Main Navigation Buttons */}
        <div className="flex items-center space-x-6">
          {/* Journal Button */}
          <Link to="/journal">
            <Button
              variant="ghost"
              className="relative transition-all duration-300 group overflow-hidden px-4 py-2 rounded-full"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110"></span>
              <span className="relative z-10 font-canela font-bold text-warm-gray hover:text-brand-crimson transition-colors">
                Journal
              </span>
            </Button>
          </Link>

          {/* Companion Button */}
          <Link to="/companion">
            <Button
              variant="ghost"
              className="relative transition-all duration-300 group overflow-hidden px-4 py-2 rounded-full"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110"></span>
              <span className="relative z-10 font-canela font-bold text-warm-gray hover:text-brand-crimson transition-colors">
                Companion
              </span>
            </Button>
          </Link>

          {/* Reflect Button */}
          <Link to="/reflect">
            <Button
              variant="ghost"
              className="relative transition-all duration-300 group overflow-hidden px-4 py-2 rounded-full"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110"></span>
              <span className="relative z-10 font-canela font-bold text-warm-gray hover:text-brand-crimson transition-colors">
                Reflect
              </span>
            </Button>
          </Link>

          {/* Profile Button */}
          <Link to="/profile">
            <Button
              variant="ghost"
              className="relative transition-all duration-300 group overflow-hidden px-4 py-2 rounded-full"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110"></span>
              <span className="relative z-10 font-canela font-bold text-warm-gray hover:text-brand-crimson transition-colors">
                Profile
              </span>
            </Button>
          </Link>

          {/* Sign In Button */}
          <Link to="/login">
            <Button
              variant="ghost"
              className="relative transition-all duration-300 group overflow-hidden px-5 py-2 rounded-full ml-2" // Increased padding, rounded-full
            >
              <span className="absolute inset-0 rounded-full bg-white/10 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110"></span>
              <span className="relative z-10 font-canela font-bold text-warm-gray hover:text-brand-crimson transition-colors">
                Sign In
              </span>
            </Button>
          </Link>
        </div>

        {/* Right Side: Website Name "Reflective Core" */}
        <div
          className="relative group px-3 py-1 rounded-lg cursor-pointer overflow-hidden"
        >
          <span className="font-canela font-bold text-xl text-warm-gray relative z-10">
            Reflective Core
          </span>
          {/* Glass effect for Reflective Core (static size) */}
          <span
            className="absolute inset-0 bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default AppNavbar;