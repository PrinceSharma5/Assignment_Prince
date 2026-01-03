import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import travelerImage from "@/assets/traveler-hero.png";

const HeroSection = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-16 overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-10 right-1/3 w-4 h-4 bg-coral/30 rounded-full animate-float" />
      <div className="hidden sm:block absolute top-40 left-20 w-6 h-6 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Orange blob decoration - top right */}
      <div className="absolute -top-20 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-orange-light rounded-full blur-3xl opacity-60 animate-blob" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left content */}
        <div className="relative z-10 text-center lg:text-left">
          <p className="text-coral font-bold tracking-wider text-xs sm:text-sm uppercase mb-4 sm:mb-6">
            Best Destinations around the world
          </p>
          
          <h1 className="font-volkhov text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            Travel, enjoy
            <br />
            <span className="relative inline-block">
              and live a new
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                <path d="M2 18C50 8 100 2 150 6C200 10 250 16 298 8" stroke="hsl(var(--coral))" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
              </svg>
            </span>
            <br />
            and full life
          </h1>
          
          <p className="text-gray-text text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Built Wicket longer admire do barton vanity itself do in it. 
            Preferred to sportsmen it engrossed listening. Park gate 
            sell they west hard for the.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <Button variant="hero" size="xl" className="rounded-lg text-sm sm:text-base">
              Find out more
            </Button>
            
            <button className="flex items-center gap-3 sm:gap-4 group">
              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-coral shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white ml-1" />
              </span>
              <span className="text-foreground/80 font-medium text-sm sm:text-base group-hover:text-foreground transition-colors">
                Play Demo
              </span>
            </button>
          </div>
        </div>
        
        {/* Right content - Traveler image */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Background decorative shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-coral-light to-orange-light rounded-full -z-10 opacity-80" />
          
          {/* Decorative purple blob - hidden on mobile */}
          <div className="hidden sm:block absolute -top-10 -right-10 w-24 h-24 bg-purple-200/50 rounded-full blur-xl animate-blob" style={{ animationDelay: "2s" }} />
          
          {/* Traveler image */}
          <img 
            src={travelerImage} 
            alt="Happy traveler with backpack" 
            className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain animate-float"
            style={{ animationDuration: "8s" }}
          />
          
          {/* Floating plane decoration - hidden on mobile */}
          <div className="hidden sm:block absolute top-20 right-0 lg:right-10">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="animate-float" style={{ animationDelay: "0.5s" }}>
              <path d="M45 15L20 30L10 25L15 20L25 25L40 10L45 15Z" fill="hsl(var(--primary))" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;