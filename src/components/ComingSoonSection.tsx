import { Wifi, Shield, Globe, Bell } from "lucide-react";

const upcoming = [
  { icon: Globe, title: "More Cities", desc: "Expanding beyond Lagos to cover all major Nigerian cities." },
  { icon: Bell, title: "Push Notifications", desc: "Get alerted before scheduled outages and traffic surges." },
  { icon: Shield, title: "Infrastructure Reports", desc: "Report and track faulty transformers and power issues." },
  { icon: Wifi, title: "Offline Mode", desc: "Access cached schedules and routes without internet." },
];

const ComingSoonSection = () => (
  <section className="py-24 px-6">
    <div className="container max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        <span className="text-gradient-accent">Coming Soon</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        We're constantly improving PowerPath. Here's what's on the roadmap.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {upcoming.map((item) => (
          <div key={item.title} className="flex gap-4 rounded-xl border border-dashed border-border bg-card/50 p-5">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-muted flex items-center justify-center">
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComingSoonSection;
