import { Zap, Navigation } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      <div className="container relative z-10 px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 animate-fade-in-up">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Electricity & Traffic Assistant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Never Guess Your{" "}
              <span className="text-gradient-primary">Power Schedule</span>{" "}
              or <span className="text-gradient-accent">Route</span> Again.
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              PowerPath is an AI assistant that helps you know when electricity will be restored, predict outages, get real-time traffic updates, and navigate the best routes, all through a simple chat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg shadow-glow hover:scale-105 transition-transform"
              >
                <Zap className="h-5 w-5" />
                Chat With PowerPath AI
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <img
              src={heroIllustration}
              alt="AI assistant for electricity schedules and traffic navigation"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
