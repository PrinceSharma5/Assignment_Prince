import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 bg-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Logo and tagline */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="/" className="text-xl sm:text-2xl font-volkhov font-bold text-foreground">
              Jadoo.
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4 max-w-xs">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["About", "Careers", "Mobile"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Help/FAQ", "Press", "Affiliates"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* More */}
          <div className="hidden sm:block">
            <h4 className="font-bold text-foreground text-sm sm:text-base mb-3 sm:mb-4">More</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Airlinefees", "Airline", "Low fare tips"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social and app */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
              </a>
            </div>
            
            <p className="text-xs sm:text-sm text-foreground font-medium mb-2 sm:mb-3">Discover our app</p>
            <div className="flex gap-2">
              <button className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium hover:opacity-90 transition-opacity">
                Google Play
              </button>
              <button className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium hover:opacity-90 transition-opacity">
                App Store
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;