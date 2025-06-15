
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom";

const NavMenu = ({ onDarkSection }: { onDarkSection: boolean }) => {
  const navLinkClasses = "text-2xl font-sans hover:text-brand-crimson transition-colors nav-link-underline";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className={onDarkSection ? 'text-brand-beige' : 'text-brand-navy'} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-brand-beige text-brand-navy w-full max-w-sm p-8 flex flex-col">
          <div className="flex flex-col justify-between h-full">
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              <SheetClose asChild><a href="#" className={navLinkClasses}>Features</a></SheetClose>
              <SheetClose asChild><a href="#" className={navLinkClasses}>Pricing</a></SheetClose>
              <SheetClose asChild><a href="#" className={navLinkClasses}>About</a></SheetClose>
            </nav>
            <div className="flex flex-col items-center space-y-4">
               <SheetClose asChild>
                <Button asChild variant="ghost" className="w-full text-lg nav-link-underline">
                  <Link to="/login">Sign In</Link>
                </Button>
               </SheetClose>
               <SheetClose asChild>
                <Button asChild className="w-full text-lg bg-brand-crimson text-brand-beige hover:bg-brand-crimson/90">
                  <Link to="/signup">Start Writing</Link>
                </Button>
               </SheetClose>
            </div>
          </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavMenu;
