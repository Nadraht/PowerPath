import { MessageSquare, MapPin, Database, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Ask the AI", desc: "Ask about your power schedule or traffic conditions" },
  { icon: MapPin, title: "Share Location", desc: "The AI asks for your state, city, and area" },
  { icon: Database, title: "Smart Lookup", desc: "AI checks electricity schedules or live traffic data" },
  { icon: CheckCircle, title: "Get Answers", desc: "Receive clear, actionable answers instantly" },
];

const HowItWorksSection = () => (
  <section className="py-24 px-6">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        How It <span className="text-gradient-accent">Works</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.title} className="text-center">
            <div className="relative mx-auto mb-6">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
