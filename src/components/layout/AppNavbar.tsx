
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-sm border-b border-champagne/30">
            <nav className="container mx-auto flex items-center justify-between p-4 h-16">
                <div className="flex items-center space-x-8">
                    <Link to="/" className="font-serif text-xl font-bold text-warm-gray">
                        Reflective Core
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/journal" className="font-sans text-sm text-warm-gray hover:text-brand-crimson transition-colors">Journal</Link>
                        <Link to="#" className="font-sans text-sm text-warm-gray/60 hover:text-brand-crimson transition-colors cursor-not-allowed">Companion</Link>
                        <Link to="#" className="font-sans text-sm text-warm-gray/60 hover:text-brand-crimson transition-colors cursor-not-allowed">Reflect</Link>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
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
