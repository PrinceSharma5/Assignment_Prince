import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, X, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navLinks = ["Destinations", "Hotels", "Flights", "Bookings", "Login"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-4 md:py-6 px-4 md:px-12 lg:px-20 flex items-center justify-between">
      <a href="/" className="text-xl md:text-2xl font-volkhov font-bold text-foreground">
        Jadoo.
      </a>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Button variant="signup" size="sm" className="rounded-md px-5">
          Sign up
        </Button>
        <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
          EN
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button className="p-2" aria-label="Open menu">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-background p-6">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium text-lg"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="signup" size="sm" className="w-full rounded-md">
                Sign up
              </Button>
            </div>
            <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium text-sm">
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;