import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CryptoATM',
    description: 'A cryptocurrency ATM integrating Paytm API, Cashfree API, and Binance to enable seamless fiat-to-crypto conversions. Facilitates UPI payments, Bitcoin purchases, and INR withdrawals.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Binance API', 'Payment Integration'],
    github: 'https://github.com/sujanyareddy',
    highlights: [
      'Integrated multiple payment APIs (Paytm, Cashfree)',
      'Real-time cryptocurrency conversion via Binance',
      'Secure transaction handling and user authentication',
    ],
  },
  {
    title: 'Event Management System',
    description: 'A comprehensive CLI application that supplements the job of an event manager with robust authentication and persistent storage for practical use cases.',
    tech: ['Java', 'PostgreSQL', 'OOP', 'Authentication'],
    github: 'https://github.com/sujanyareddy',
    highlights: [
      'Full CRUD operations for event management',
      'User authentication and role-based access',
      'Persistent data storage with PostgreSQL',
    ],
  },
  {
    title: 'Telugu News Classification',
    description: 'An NLP-based classification system that categorizes Telugu news articles into respective categories like Business, Editorial, Entertainment, Sports, and Nation using deep learning.',
    tech: ['Python', 'NLP', 'Deep Learning', 'TensorFlow', 'Classification'],
    github: 'https://github.com/sujanyareddy',
    highlights: [
      'Multi-class text classification for Telugu language',
      'Deep learning model with high accuracy',
      'Preprocessing and feature extraction for NLP',
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-2xl">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="h-full bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  {/* Glow effect on hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="projectGlow"
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary text-4xl opacity-80">📁</div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground text-xs flex gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
