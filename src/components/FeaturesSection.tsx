import { Bot, MapPin, BarChart3, Navigation } from "lucide-react";

const features = [
  { icon: Bot, title: "AI-Powered Assistant", desc: "Get instant, intelligent answers about electricity and traffic." },
  { icon: MapPin, title: "Location-Based Updates", desc: "Power schedules and traffic data tailored to your specific area." },
  { icon: BarChart3, title: "Outage Predictions", desc: "AI-driven predictions to help you plan ahead for outages." },
  { icon: Navigation, title: "Traffic & Directions", desc: "Real-time traffic conditions with step-by-step route guidance." },
];

const FeaturesSection = () => (
  <section className="py-24 px-6 bg-muted/30">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        <span className="text-gradient-primary">Features</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-glow transition-shadow">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
