import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Programmer Analyst + Associate",
    company: "Cognizant Technology Solutions",
    location: "India",
    period: "Oct 2021 – Nov 2024",
    description: [
      "Analyzed input data and performed data cleansing including null checks, duplicate removal, and validation",
      "Performed various transformations and metadata casting using custom-built schemas",
      "Worked on data extraction using complex SQL queries including joins, subqueries, and set operators",
      "Improved query performance through indexing, views optimization, and CTE-based simplification",
    ],
  },
  {
    title: "Data Analyst",
    company: "Accenture",
    location: "India",
    period: "Nov 2024 – Jan 2026",
    description: [
      "Developed and optimized distributed data pipelines using PySpark to process and transform large-scale financial datasets",
      "Deployed and managed Spark jobs on AWS EMR clusters for high-performance data processing",
      "Integrated AWS S3 for reading/writing intermediate and final datasets in Parquet/CSV formats",
      "Performed data validation using complex SQL queries with various clauses, grouping functions, and window functions",
      "Designed and implemented REST APIs using AWS API Gateway with POST methods for secure client request handling",
      "Developed and deployed AWS Lambda functions to process API requests with event-driven triggers",
      "Integrated AWS Lambda with API Gateway and Amazon S3 for automated data processing workflows",
      "Built and maintained AWS Glue PySpark scripts for scalable ETL operations on large datasets",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Experience</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="timeline-dot z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-background rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-4 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </p>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
