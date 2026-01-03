import { MapPin, CreditCard, Plane, Heart, Send, Navigation } from "lucide-react";
import greeceImage from "@/assets/greece-trip.jpg";

const steps = [
  {
    icon: MapPin,
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-orange-light",
    iconColor: "text-primary",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-coral-light",
    iconColor: "text-coral",
  },
  {
    icon: Plane,
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
];

const BookingSteps = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Steps */}
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground font-semibold text-base sm:text-lg mb-2 sm:mb-3">Easy and Fast</p>
            <h2 className="font-volkhov text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12 leading-tight">
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>
            
            <div className="space-y-5 sm:space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4 sm:gap-5 text-left">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Trip card */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-5 w-24 h-24 bg-orange-light rounded-full blur-2xl opacity-60 hidden md:block" />
            <div className="absolute -bottom-10 -left-5 w-32 h-32 bg-coral-light rounded-full blur-2xl opacity-60 hidden md:block" />
            
            {/* Main trip card */}
            <div className="relative bg-card rounded-3xl shadow-card p-4 sm:p-5 w-full max-w-sm">
              <img
                src={greeceImage}
                alt="Trip to Greece"
                className="w-full h-40 sm:h-52 object-cover rounded-2xl mb-4 sm:mb-5"
              />
              
              <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1">
                Trip To Greece
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                14-29 June | by Robbin Joseph
              </p>
              
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-coral-light transition-colors">
                  <Navigation className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-coral-light transition-colors">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-coral-light transition-colors">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">24 people going</span>
                </div>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-coral fill-coral" />
              </div>
              
              {/* Floating "ongoing" card - hidden on very small screens */}
              <div className="hidden sm:block absolute -right-2 md:-right-4 top-24 md:top-32 bg-card rounded-2xl shadow-lg p-3 md:p-4 max-w-[140px] md:max-w-[160px]">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-light rounded-full flex items-center justify-center">
                    <Navigation className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Ongoing</p>
                    <p className="font-semibold text-xs md:text-sm text-foreground">Trip to Rome</p>
                  </div>
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground">
                  <span className="text-coral font-medium">40%</span> completed
                </div>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-coral rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;