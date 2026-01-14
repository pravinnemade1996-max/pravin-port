import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Scalable ETL Pipeline Development",
  "AWS Cloud Architecture",
  "Performance Tuning & Optimization",
  "Data Validation & Quality Assurance",
  "Schema Evolution Management",
  "Complex SQL Query Optimization",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Building Data Solutions at Scale
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-foreground font-semibold">Pravin Nemade</span> is a Data Engineer 
              with 4.2+ years of experience in designing, developing, and optimizing scalable data pipelines 
              using <span className="text-primary font-medium">PySpark, SQL, and AWS</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Skilled in ETL processing, data validation, performance tuning, schema evolution, 
              and building cloud-native big data workflows. Passionate about transforming complex 
              data challenges into efficient, maintainable solutions that drive business value.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">PySpark</span>
              <span className="skill-badge">AWS</span>
              <span className="skill-badge">SQL</span>
              <span className="skill-badge">ETL</span>
              <span className="skill-badge">Airflow</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background rounded-2xl p-8 border border-border shadow-card"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
              Core Strengths
            </h3>
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
