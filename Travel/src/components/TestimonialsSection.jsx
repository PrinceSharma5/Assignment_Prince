import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonial = {
  quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  author: "Mike Taylor",
  location: "Lahore, Pakistan",
};

const TestimonialsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Header */}
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground font-semibold text-base md:text-lg mb-3">TESTIMONIALS</p>
            <h2 className="font-volkhov text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              What People Say
              <br />
              About Us.
            </h2>
            
            {/* Dots indicator - hidden on mobile, shown below card */}
            <div className="hidden lg:flex gap-3 mt-10">
              <button className="w-3 h-3 rounded-full bg-foreground"></button>
              <button className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"></button>
            </div>
          </div>
          
          {/* Right - Testimonial card */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main testimonial card */}
            <div className="bg-card rounded-2xl shadow-card p-6 sm:p-8 md:p-10 relative z-10">
              {/* Avatar and quote */}
              <div className="absolute -top-8 left-4 sm:-top-10 sm:-left-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-card shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-coral/30 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-volkhov font-bold text-foreground/60">M</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 mt-6">
                "{testimonial.quote}"
              </p>
              
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-foreground">{testimonial.author}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.location}</p>
              </div>
            </div>
            
            {/* Background testimonial hint - hidden on small screens */}
            <div className="hidden md:block absolute top-8 right-0 translate-x-4 bg-card/50 rounded-2xl p-4 md:p-6 w-40 md:w-48 opacity-60">
              <h4 className="font-semibold text-sm md:text-base text-foreground">Chris Thomas</h4>
              <p className="text-muted-foreground text-[10px] md:text-xs">CEO of Red Button</p>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-end">
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
              </button>
            </div>
            
            {/* Mobile dots indicator */}
            <div className="flex lg:hidden gap-3 mt-6 justify-center">
              <button className="w-3 h-3 rounded-full bg-foreground"></button>
              <button className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;