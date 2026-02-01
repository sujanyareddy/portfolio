import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-2xl">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm a <span className="text-primary font-medium">Frontend Engineer at Oracle</span>, 
              where I build and maintain critical internal services used by teams across the organization. 
              With a strong foundation in <span className="text-primary">React, TypeScript, and modern web technologies</span>, 
              I focus on creating performant, accessible, and maintainable applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              My experience spans from independently managing production releases and implementing complex features 
              like chunked file uploads and project deletion flows, to enhancing user experiences through 
              multilingual support and dynamic component architecture. I take pride in owning end-to-end delivery 
              — from initial design and API integration to deployment and monitoring.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Beyond frontend development, I have a background in <span className="text-primary">cybersecurity</span> from 
              my time at Bi0s, India's top CTF team, and experience building full-stack applications with 
              Java, Spring Boot, and Python. I'm passionate about clean code, accessibility, and creating 
              delightful user experiences that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-6"
            >
              <p className="text-foreground font-medium mb-4">Technologies I work with:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'React & TypeScript',
                  'JavaScript (ES6+)',
                  'HTML & CSS',
                  'Spring Boot',
                  'Java & Python',
                  'PostgreSQL',
                  'Git & GitHub',
                  'REST APIs',
                  'Responsive Design',
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
