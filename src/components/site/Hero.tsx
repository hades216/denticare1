import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Award, Phone, MapPin, Clock } from "lucide-react";
import RandomReviewCard from "@/components/site/RandomReviewCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <div className="container relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center px-4 sm:px-6">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass shadow-soft mb-5 sm:mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary-deep">
              PMDC Verified · 16+ Years Experience
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.08] text-primary-deep">
            Your Smile,{" "}
            <span className="text-gradient">Perfected</span> with Care.
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
            Premium dental care in Islamabad by Asst. Prof. Dr. Muhammad Omer
            Siddiqui. From cosmetic dentistry to advanced implants — experience
            comfort, precision and a smile you'll love.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#book">Book Your Appointment</a>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat icon={<Star className="w-5 h-5" />} value="4.7★" label="30+ Reviews" />
            <Stat icon={<Award className="w-5 h-5" />} value="16 Yrs" label="Experience" />
            <Stat icon={<ShieldCheck className="w-5 h-5" />} value="PMDC" label="Verified" />
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute -inset-10 bg-hero-gradient rounded-[2.5rem] blur-3xl opacity-25" />
          <div className="relative grid gap-5">
            <RandomReviewCard />

            <div className="grid grid-cols-2 gap-5">
              <div className="glass rounded-3xl p-5 shadow-elegant">
                <Clock className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">Open Today</div>
                <div className="text-sm font-semibold text-primary-deep">5 PM – 8:30 PM</div>
              </div>
              <a href="tel:+923335299143" className="glass rounded-3xl p-5 shadow-elegant transition-all hover:shadow-glow">
                <Phone className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">Call Us</div>
                <div className="text-sm font-semibold text-primary-deep">0333 5299143</div>
              </a>
              <div className="glass rounded-3xl p-5 shadow-elegant col-span-2">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">Visit</div>
                <div className="text-sm font-semibold text-primary-deep">
                  Options Arcade, Main Road, PWD, Islamabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex flex-col">
    <div className="text-primary mb-1">{icon}</div>
    <div className="font-display text-2xl font-semibold text-primary-deep">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

export default Hero;