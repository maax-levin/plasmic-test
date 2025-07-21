import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="hero"
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-container">
        <div className="hero-content">
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div className="greeting" variants={itemVariants}>
              <span className="hand">👋</span>
              <span>Hello, I'm</span>
            </motion.div>
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              <span className="gradient-text">Creative UI/UX</span>
              <br />
              Designer
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              I craft beautiful, intuitive digital experiences that bridge the gap 
              between user needs and business goals. With a passion for modern design 
              and user-centered thinking, I transform complex problems into elegant solutions.
            </motion.p>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number gradient-text">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </motion.div>

            <motion.div className="hero-actions" variants={itemVariants}>
              <button className="btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="hero-image" variants={itemVariants}>
            <div className="image-container">
              <div className="image-bg"></div>
              <div className="profile-image">
                <Image
                  src="/images/profile/designer-avatar.jpg"
                  alt="UI/UX Designer"
                  width={400}
                  height={400}
                  priority
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3EDesigner%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <div className="element-icon">🎨</div>
                </div>
                <div className="floating-element element-2">
                  <div className="element-icon">✨</div>
                </div>
                <div className="floating-element element-3">
                  <div className="element-icon">🚀</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 80vh;
        }

        .hero-text {
          z-index: 2;
        }

        .greeting {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .hand {
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 50%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .image-bg {
          position: absolute;
          inset: -20px;
          background: var(--gradient);
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(20px);
          animation: float 6s ease-in-out infinite;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.1);
          z-index: 2;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .element-1 {
          top: 10%;
          right: 20%;
          animation: float 4s ease-in-out infinite;
        }

        .element-2 {
          bottom: 20%;
          left: 10%;
          animation: float 4s ease-in-out infinite 1s;
        }

        .element-3 {
          top: 60%;
          right: -10%;
          animation: float 4s ease-in-out infinite 2s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
          }

          .image-container {
            width: 300px;
            height: 300px;
          }

          .floating-element {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 0 1rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
}