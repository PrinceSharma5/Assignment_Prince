import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import BookingSteps from "@/components/BookingSteps";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <BookingSteps />
      <TestimonialsSection />
      <PartnersSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;