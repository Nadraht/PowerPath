import { Zap, User, Bot, Navigation } from "lucide-react";

const DemoSection = () => (
  <section id="demo" className="py-24 px-6">
    <div className="container max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        See PowerPath <span className="text-gradient-accent">In Action</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Electricity Chat */}
        <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="bg-gradient-primary px-5 py-3 flex items-center gap-3">
            <Zap className="h-4 w-4 text-primary-foreground" />
            <span className="font-semibold text-sm text-primary-foreground">⚡ Electricity Assistant</span>
            <span className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start gap-2.5 justify-end">
              <div className="rounded-2xl rounded-tr-sm bg-secondary/20 border border-secondary/30 px-4 py-2.5 max-w-[85%]">
                <p className="text-sm">When will power return in Akerele Street, Shitta, Surulere, Lagos?</p>
              </div>
              <div className="h-7 w-7 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center">
                <User className="h-3.5 w-3.5 text-secondary" />
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="h-7 w-7 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-primary/10 border border-primary/20 px-4 py-2.5 max-w-[85%]">
                <p className="text-sm">Power in Akerele Street, Shitta, Surulere is expected by <strong className="text-primary">7pm tonight and 8am tomorrow morning</strong>. Would you like me to set a reminder?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Chat */}
        <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="bg-gradient-accent px-5 py-3 flex items-center gap-3">
            <Navigation className="h-4 w-4 text-accent-foreground" />
            <span className="font-semibold text-sm text-accent-foreground">🚦 Traffic Assistant</span>
            <span className="ml-auto h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start gap-2.5 justify-end">
              <div className="rounded-2xl rounded-tr-sm bg-secondary/20 border border-secondary/30 px-4 py-2.5 max-w-[85%]">
                <p className="text-sm">How long will it take me to get to Fola Osibo, Lekki Phase 1 from Aguda, Surulere?</p>
              </div>
              <div className="h-7 w-7 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center">
                <User className="h-3.5 w-3.5 text-secondary" />
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="h-7 w-7 shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-accent/10 border border-accent/20 px-4 py-2.5 max-w-[85%]">
                <p className="text-sm">Estimated travel time is <strong className="text-accent">45 minutes</strong> based on current traffic. Turn-by-turn directions are available below.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/chat"
          className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform"
        >
          <Zap className="h-5 w-5" />
          Start Using PowerPath
        </a>
      </div>
    </div>
  </section>
);

export default DemoSection;
