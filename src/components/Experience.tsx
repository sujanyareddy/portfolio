import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Associate Software Developer',
    company: 'Oracle',
    period: 'Aug 2023 – Present',
    description: [
      'Independently managed monthly production releases and took primary ownership of test environment deployments for a core internal service',
      'Developed a complete page using Oracle\'s Rapid framework (Preact-based), handling component design, state management, and API integration',
      'Implemented project deletion functionality with cross-functional teams for secure, end-to-end data removal',
      'Replaced vulnerable Blueimp file upload with custom chunked solution, delivering secure fix under tight deadlines',
      'Implemented multilingual support enabling localization across 5+ languages',
    ],
    tech: ['React', 'TypeScript', 'OJET', 'Spring Boot'],
  },
  {
    title: 'Project Intern',
    company: 'Oracle',
    period: 'Jan 2023 – Jul 2023',
    description: [
      'Converted static previews and tables into dynamic, backend-driven components',
      'Refactored and upgraded existing front-end pages to align with modern coding standards',
      'Delivered multiple frontend features and UI improvements supporting product enhancements',
    ],
    tech: ['React', 'TypeScript', 'OJET'],
  },
  {
    title: 'Bi0s Member',
    company: 'Bi0s (India\'s #1 CTF Team)',
    period: 'Nov 2019 – Jun 2020',
    description: [
      'Contributed to India\'s top-ranked CTF team',
      'Gained hands-on experience in cybersecurity challenges',
      'Developed expertise in cryptography and security analysis',
    ],
    tech: ['Cybersecurity', 'Cryptography', 'CTF'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-2xl">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-8 md:pl-20 group"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-[-4px] md:left-[28px] top-2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"
                  />

                  <motion.div
                    whileHover={{ 
                      x: 10,
                      boxShadow: "0 0 30px hsl(var(--primary) / 0.2)",
                    }}
                    className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex gap-3">
                          <span className="text-primary mt-1.5 text-xs">▹</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
