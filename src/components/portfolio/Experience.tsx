import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of microservices architecture, mentoring junior developers, and driving technical decisions for scalable solutions.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client-facing applications using React and Node.js. Improved performance by 40% through optimization.",
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2018 - 2020",
    description:
      "Developed responsive web applications for various clients. Collaborated closely with designers to implement pixel-perfect UIs.",
  },
  {
    type: "education",
    title: "B.Sc. Computer Science",
    company: "University of Technology",
    period: "2014 - 2018",
    description:
      "Graduated with honors. Specialized in software engineering and web technologies. Led multiple team projects.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
          >
            Career Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-6 mb-8 last:mb-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 lg:-translate-x-1/2 mt-6 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="card-glass p-6"
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        {item.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
