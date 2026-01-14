import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Cloud, 
  Database, 
  BarChart3, 
  Terminal, 
  FileCode 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Big Data",
    icon: Code2,
    skills: ["PySpark", "Spark SQL", "Python", "Scala Basics"],
    color: "primary",
  },
  {
    title: "AWS Cloud Services",
    icon: Cloud,
    skills: ["Amazon S3", "AWS EMR", "AWS Glue", "AWS Lambda", "API Gateway"],
    color: "accent",
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["ETL/ELT Pipelines", "Data Validation", "Schema Evolution", "Performance Tuning"],
    color: "primary",
  },
  {
    title: "SQL Expertise",
    icon: BarChart3,
    skills: ["CTEs", "Window Functions", "Complex Joins", "Subqueries", "Query Optimization"],
    color: "accent",
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Apache Airflow", "Unix/Linux", "Git", "Docker Basics"],
    color: "primary",
  },
  {
    title: "Data Formats",
    icon: FileCode,
    skills: ["Parquet", "CSV", "JSON", "Delta Lake"],
    color: "accent",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive skill set spanning big data processing, cloud architecture, and data pipeline development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                category.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              } mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`h-6 w-6 ${
                  category.color === "primary" ? "text-primary" : "text-accent"
                }`} />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
