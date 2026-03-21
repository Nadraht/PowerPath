import { Zap } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex items-center justify-between h-16 px-6">
      <div className="flex items-center gap-2 font-heading font-bold text-xl">
        <Zap className="h-5 w-5 text-primary" />
        <span>Power<span className="text-primary">Path</span></span>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle /> 
        <a
          href="#demo"
          className="bg-gradient-primary text-primary-foreground font-medium px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform">
          Try PowerPath
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
