import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Database, Workflow, Server } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AWS EMR Financial Data Pipeline",
    description: "Designed and implemented a high-performance data pipeline for processing large-scale financial datasets. The system handles millions of transactions daily with fault-tolerant processing and automated data quality checks.",
    icon: Database,
    techStack: ["PySpark", "AWS EMR", "S3", "Parquet", "Delta Lake"],
    metrics: "Processing 10M+ records daily with 99.9% uptime",
  },
  {
    title: "Airflow ETL Orchestration System",
    description: "Built an end-to-end ETL orchestration system using Apache Airflow for scheduling and monitoring complex data workflows. Implemented retry logic, alerting, and dependency management for reliable pipeline execution.",
    icon: Workflow,
    techStack: ["Apache Airflow", "PySpark", "SQL", "Python", "AWS S3"],
    metrics: "Orchestrating 50+ DAGs with automated failure recovery",
  },
  {
    title: "Serverless Data Processing API",
    description: "Developed a fully serverless data processing solution using AWS Lambda and API Gateway. The system provides real-time data transformation capabilities with automatic scaling and cost-effective resource utilization.",
    icon: Server,
    techStack: ["AWS Lambda", "API Gateway", "S3", "Glue", "CloudWatch"],
    metrics: "Handling 1000+ requests/minute at peak load",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projects</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Key projects showcasing expertise in building scalable data infrastructure and cloud-native solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-primary">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-xs font-medium text-accent mb-4">
                  📊 {project.metrics}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group/btn">
                  View Case Study
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
