import { motion } from "framer-motion";
import { Heart, Database, Cloud, Sparkles } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="font-display text-xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.02 }}
            >
              Pravin Nemade
            </motion.a>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Building scalable data pipelines with PySpark and AWS
            </p>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Data Engineering</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Cloud className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">AWS Cloud</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Pravin Nemade. Crafted with
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            and
            <span className="text-primary font-medium">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
