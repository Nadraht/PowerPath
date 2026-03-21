import { Bot, MapPin, Zap, Navigation, Clock } from "lucide-react";
import solutionIllustration from "@/assets/solution-illustration.png";

const items = [
  { icon: Zap, text: "Ask when electricity will return in your area" },
  { icon: MapPin, text: "Get location-specific power schedules by state, city & area" },
  { icon: Navigation, text: "Get real-time traffic conditions and travel time estimates" },
  { icon: Bot, text: "Receive AI-powered step-by-step directions" },
  { icon: Clock, text: "Plan your commute with live traffic data" },
];

const SolutionSection = () => (
  <section className="py-24 px-6 bg-muted/30">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        The <span className="text-gradient-primary">Solution</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        PowerPath uses Generative AI to provide instant answers about electricity supply and traffic conditions. Simply chat with the AI to get the information you need.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={solutionIllustration}
            alt="AI assistant for electricity and traffic navigation"
            className="w-full rounded-2xl shadow-card"
          />
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="text-base font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
