import { MessageSquare, MapPin, Database, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Ask the AI", desc: "Ask about your power schedule or traffic conditions" },
  { icon: MapPin, title: "Share Location", desc: "The AI asks for your state, city, and area" },
  { icon: Database, title: "Smart Lookup", desc: "AI checks electricity schedules or live traffic data" },
  { icon: CheckCircle, title: "Get Answers", desc: "Receive clear, actionable answers instantly" },
];

const HowItWorksSection = () => (
<section className="py-24 px-6 bg-white text-slate-900 dark:bg-[#05080D] dark:text-white transition-colors duration-300">
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
        How It <span className="text-[#A3E635]">Works</span> {/* Restore that specific Lime Green */}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <div key={step.title} className="text-center group">
            <div className="relative mx-auto mb-8 w-20">
              {/* RESTORED GRADIENT BOX */}
              <div className="relative h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-[#10B981] to-[#3B82F6] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <step.icon className="h-9 w-9 text-[#05080D] stroke-[2.5px]" />
              </div>

              {/* RESTORED YELLOW NUMBER CHIP */}
              <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#FACC15] text-black text-xs font-black flex items-center justify-center shadow-lg border-2 border-[#05080D]">
                {i + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
