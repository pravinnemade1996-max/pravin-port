import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Star } from "lucide-react";

const education = [
  {
    degree: "M.Tech in Thermal Engineering",
    institution: "College of Engineering Pune",
    period: "2019 – 2021",
    grade: "CGPA: 8.87",
    achievement: "Best Paper Award in ICAFFTS-2021",
  },
  {
    degree: "B.E. in Mechanical Engineering",
    institution: "Sant Gadage Baba College of Engineering & Technology, Bhusawal",
    period: "2014 – 2018",
    grade: "CGPA: 9.08",
    achievement: "University Ranker from KBNMU",
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Education</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                      <Star className="h-4 w-4" />
                      {edu.grade}
                    </div>
                  </div>

                  {edu.achievement && (
                    <div className="mt-3 flex items-start gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{edu.achievement}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
