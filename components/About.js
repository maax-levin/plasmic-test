import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Users, Target, Award } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 90 },
    { name: 'Prototyping', level: 88 },
    { name: 'Visual Design', level: 92 },
    { name: 'Design Systems', level: 85 },
    { name: 'User Testing', level: 87 },
  ];

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 
    'InVision', 'Principle', 'Framer', 'Webflow', 'After Effects'
  ];

  const values = [
    {
      icon: <Palette size={24} />,
      title: 'Creative Excellence',
      description: 'Pushing boundaries with innovative design solutions that captivate and inspire.'
    },
    {
      icon: <Users size={24} />,
      title: 'User-Centered',
      description: 'Every design decision is made with the end user in mind, ensuring optimal experiences.'
    },
    {
      icon: <Target size={24} />,
      title: 'Goal-Driven',
      description: 'Aligning design strategies with business objectives to deliver measurable results.'
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Focus',
      description: 'Commitment to delivering polished, pixel-perfect designs that exceed expectations.'
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Passionate about creating
            <span className="gradient-text"> meaningful experiences</span>
          </h2>
          <p className="section-description">
            With over 5 years in the design industry, I've worked with startups and 
            Fortune 500 companies to create digital products that users love and 
            businesses thrive on.
          </p>
        </motion.div>

        <div className="about-content">
          {/* Values Grid */}
          <motion.div
            className="values-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="skills-content">
              <div className="skills-list">
                <h3 className="skills-title">Core Skills</h3>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="tools-section">
                <h3 className="tools-title">Tools & Technologies</h3>
                <motion.div
                  className="tools-grid"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      className="tool-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 6rem 0;
          background: linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.02) 50%, transparent 100%);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 2rem;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .value-card {
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .value-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
        }

        .value-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: var(--gradient);
          border-radius: 12px;
          margin: 0 auto 1rem;
          color: white;
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .value-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .skills-section {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          backdrop-filter: blur(10px);
        }

        .skills-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .skills-title, .tools-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .skill-item {
          margin-bottom: 1.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          color: var(--primary);
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--gradient);
          border-radius: 4px;
        }

        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tool-tag {
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 8px;
          color: var(--primary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tool-tag:hover {
          background: var(--primary);
          color: white;
        }

        @media (max-width: 768px) {
          .about {
            padding: 4rem 0;
          }

          .about-container {
            padding: 0 1rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .skills-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-section {
            padding: 2rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .about-content {
            gap: 3rem;
          }
        }
      `}</style>
    </motion.section>
  );
}