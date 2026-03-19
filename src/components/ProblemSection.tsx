import { AlertTriangle, Clock, PhoneOff, Car, MapPinOff } from "lucide-react";
import problemIllustration from "@/assets/problem-illustration.png";

const problems = [
  { icon: AlertTriangle, title: "Unpredictable Outages", desc: "Power cuts happen without warning, leaving families and businesses in the dark." },
  { icon: Clock, title: "No Restoration Info", desc: "People have no idea when electricity will return, causing frustration and wasted time." },
  { icon: PhoneOff, title: "Poor Communication", desc: "Getting useful information from electricity providers is slow and frustrating." },
  { icon: Car, title: "Gridlock Traffic", desc: "Lagos traffic is notoriously unpredictable, wasting hours of productive time daily." },
  { icon: MapPinOff, title: "No Route Guidance", desc: "Commuters lack real-time, AI-powered traffic insights to plan smarter routes." },
];

const ProblemSection = () => (
  <section className="py-24 px-6">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        The <span className="text-accent">Problem</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Communities in Nigeria face unpredictable electricity outages and crushing traffic congestion, with no easy way to get real-time answers.
      </p>

      <div className="mb-16">
        <img
          src={problemIllustration}
          alt="Electricity outages and traffic congestion in Lagos"
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-card"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div key={p.title} className="rounded-xl border border-border bg-card p-6 shadow-card hover:border-accent/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <p.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
