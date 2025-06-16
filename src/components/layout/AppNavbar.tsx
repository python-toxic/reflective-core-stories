
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AppNavbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-sm border-b border-champagne/30">
            <nav className="container mx-auto flex items-center justify-center p-4 h-16 relative">
                <div className="flex items-center space-x-3">
                    <span className="font-serif text-xl font-bold text-warm-gray">
                        Reflective Core
                    </span>
                    <span className="text-warm-gray/60 italic text-lg font-light">/</span>
                    <Link to="/login">
                        <Button variant="ghost" className="text-warm-gray hover:text-brand-crimson transition-colors">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default AppNavbar;
