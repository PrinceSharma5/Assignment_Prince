import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

const SubscribeSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-[hsl(252,60%,95%)] via-[hsl(240,70%,97%)] to-[hsl(280,50%,95%)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[hsl(252,70%,60%)] to-[hsl(270,65%,55%)] rounded-full flex items-center justify-center rotate-45 hover:scale-110 hover:shadow-lg transition-all cursor-pointer">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          <div className="absolute -bottom-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="text-center relative z-10">
            <h2 className="font-volkhov text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 leading-relaxed pr-8 sm:pr-0">
              Subscribe to get information, latest news and other
              <br className="hidden md:block" />
              interesting offers about Jadoo
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full h-12 sm:h-14 pl-11 sm:pl-12 pr-4 bg-card rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                />
              </div>
              <Button variant="coral" size="xl" className="rounded-xl h-12 sm:h-14 text-sm sm:text-base">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;