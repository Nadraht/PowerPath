import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-heading font-bold text-lg">
        <Zap className="h-4 w-4 text-primary" />
        <span>PowerPath</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 PowerPath. Empowering communities with AI.</p>
    </div>
  </footer>
);

export default Footer;
