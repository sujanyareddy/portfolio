import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C++', 'HTML/CSS', 'Haskell', 'Scala'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Preact', 'OJET', 'Tailwind CSS', 'Responsive Design', 'Web Accessibility'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'REST APIs', 'PostgreSQL', 'Node.js', 'API Integration'],
  },
  {
    category: 'Libraries & Frameworks',
    skills: ['TensorFlow', 'Selenium', 'Matplotlib', 'pandas', 'numpy', 'scikit-learn'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Eclipse', 'CI/CD', 'Agile'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-2xl">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 15px hsl(var(--primary) / 0.3)",
                      }}
                      className="px-3 py-1.5 bg-background border border-border rounded text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Projects Completed', value: '15+' },
              { label: 'Technologies', value: '25+' },
              { label: 'Production Releases', value: '20+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
