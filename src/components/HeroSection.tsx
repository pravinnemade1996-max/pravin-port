import { Download, Mail, Sparkles, Cloud, Database, Workflow } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const highlights = [
  { icon: Sparkles, label: "Experience", value: "4.2+ Years" },
  { icon: Database, label: "Big Data", value: "PySpark + SQL" },
  { icon: Cloud, label: "AWS Cloud", value: "EMR, Glue, S3" },
  { icon: Workflow, label: "Tools", value: "Airflow + ETL" },
];

export const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-hero">
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text">Data Engineer</span>
              <br />
              <span className="text-foreground">PySpark | SQL | AWS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl text-balance"
            >
              Data Engineer with 4.2+ years of experience building scalable ETL pipelines, 
              cloud-based Spark workflows, and AWS-native data solutions. Transforming 
              raw data into business insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="/Pravin-Resume.pdf" download>
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" onClick={handleContactClick}>
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-card border border-border shadow-card card-hover text-center"
                >
                  <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-50" />
              
              {/* Profile image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-card shadow-elevated"
              >
                <img
                  src={profilePhoto}
                  alt="Pravin Nemade - Data Engineer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-card shadow-elevated border border-border"
              >
                <span className="text-sm font-semibold text-primary">AWS Certified</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-4 px-4 py-2 rounded-full bg-card shadow-elevated border border-border"
              >
                <span className="text-sm font-semibold text-accent">PySpark Pro</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
