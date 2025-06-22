import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const JournalNavbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-sm border-b border-champagne/30">
            <nav className="container mx-auto flex items-center justify-between p-4 h-16">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <span className="font-canela text-2xl font-extrabold text-brand-navy tracking-tight select-none">
                            Reflective Core
                        </span>
                    </Link>
                </div>

                {/* Center - Navigation Links */}
                <div className="flex items-center space-x-8">
                    <Link to="/journal" className="nav-link-underline">
                        <span className="font-canela text-lg font-bold text-brand-navy hover:text-brand-crimson transition-colors">
                            Journal
                        </span>
                    </Link>
                    <Link to="/companion" className="nav-link-underline">
                        <span className="font-canela text-lg font-bold text-brand-navy hover:text-brand-crimson transition-colors">
                            Companion
                        </span>
                    </Link>
                    <Link to="/reflect" className="nav-link-underline">
                        <span className="font-canela text-lg font-bold text-brand-navy hover:text-brand-crimson transition-colors">
                            Reflect
                        </span>
                    </Link>
                </div>

                {/* Right side - Profile Button */}
                <div className="flex items-center">
                    <Button variant="ghost" className="text-warm-gray hover:text-brand-crimson hover:bg-transparent transition-colors p-2">
                        <User size={24} />
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default JournalNavbar;
