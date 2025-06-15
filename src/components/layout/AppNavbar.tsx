
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-sm border-b border-champagne/30">
            <nav className="container mx-auto flex items-center justify-between p-4 h-16">
                <div className="flex-1 flex justify-start">
                    <Link to="/" className="font-serif text-xl font-bold text-warm-gray">
                        Reflective Core
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink 
                        to="/journal" 
                        className={({ isActive }) => 
                            `font-sans font-bold text-sm nav-link-underline transition-colors ${
                                isActive ? "text-brand-crimson [&::after]:scale-x-100" : "text-warm-gray hover:text-brand-crimson"
                            }`
                        }
                    >
                        Journal
                    </NavLink>
                    <Link to="#" className="font-sans font-bold text-sm text-warm-gray/60 hover:text-brand-crimson transition-colors cursor-not-allowed">Companion</Link>
                    <Link to="#" className="font-sans font-bold text-sm text-warm-gray/60 hover:text-brand-crimson transition-colors cursor-not-allowed">Reflect</Link>
                </div>

                <div className="flex-1 flex justify-end">
                    <Button variant="ghost" size="icon">
                        <UserCircle className="h-6 w-6 text-warm-gray" />
                        <span className="sr-only">Profile</span>
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default AppNavbar;
