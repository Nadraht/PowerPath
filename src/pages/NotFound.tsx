import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-extrabold text-primary/20">404</h1>
        <p className="mb-2 text-2xl font-bold italic text-foreground">
          Eyya! This page is like NEPA...
        </p>
        <p className="mb-8 text-muted-foreground">
          It just disappeared without warning. Let’s get you back to your power schedule before the inverter starts beeping.
        </p>
        <a href="/" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform">
          Take Me Home Joor
        </a>
      </div>
    </div>
  );
};

export default NotFound;
