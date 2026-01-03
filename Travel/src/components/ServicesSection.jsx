import { Cloud, Navigation, MapPin, Settings } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    color: "bg-orange-light",
    iconColor: "text-primary",
  },
  {
    icon: Navigation,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    color: "bg-coral-light",
    iconColor: "text-coral",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferred to sportsmen it engrossed listening.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Settings,
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-muted-foreground font-semibold text-base sm:text-lg mb-2 sm:mb-3">CATEGORY</p>
          <h2 className="font-volkhov text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            We Offer Best Services
          </h2>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-2 group ${
                service.featured 
                  ? "bg-card shadow-card" 
                  : "bg-transparent hover:bg-card hover:shadow-card"
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${service.iconColor}`} />
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-base sm:text-lg md:text-xl text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Featured decoration */}
              {service.featured && (
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-coral rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 sm:w-3 h-0.5 bg-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;