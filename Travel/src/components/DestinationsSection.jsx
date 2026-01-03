import { Navigation } from "lucide-react";
import romeImage from "@/assets/rome-destination.jpg";
import londonImage from "@/assets/london-destination.jpg";
import europeImage from "@/assets/europe-destination.jpg";

const destinations = [
  {
    image: romeImage,
    city: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    image: londonImage,
    city: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: europeImage,
    city: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

const DestinationsSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-muted-foreground font-semibold text-base sm:text-lg mb-2 sm:mb-3">Top Selling</p>
          <h2 className="font-volkhov text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Top Destinations
          </h2>
        </div>
        
        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.city}
              className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-destination hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl text-foreground">
                    {destination.city}
                  </h3>
                  <span className="text-muted-foreground font-medium text-sm sm:text-base">
                    {destination.price}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                  <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;