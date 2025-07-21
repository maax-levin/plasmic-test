import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';

export default function ProjectHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const featuredProjects = [
    {
      id: 1,
      title: 'EcoTrack - Sustainability Dashboard',
      description: 'A comprehensive dashboard for tracking environmental impact and carbon footprint. Features real-time analytics, goal setting, and team collaboration tools.',
      image: '/images/projects/ecotrack.jpg',
      category: 'SaaS Platform',
      tags: ['UI/UX Design', 'Dashboard', 'Analytics', 'Sustainability'],
      featured: true,
      link: '#',
      github: '#',
      stats: {
        users: '50K+',
        rating: 4.9,
        year: '2024'
      }
    },
    {
      id: 2,
      title: 'FinFlow - Banking App',
      description: 'Modern mobile banking application with intuitive money management features, smart budgeting, and seamless transaction experience.',
      image: '/images/projects/finflow.jpg',
      category: 'Mobile App',
      tags: ['Mobile Design', 'Fintech', 'iOS', 'Android'],
      featured: true,
      link: '#',
      github: '#',
      stats: {
        users: '100K+',
        rating: 4.8,
        year: '2023'
      }
    },
    {
      id: 3,
      title: 'MindSpace - Mental Health Platform',
      description: 'Digital wellness platform connecting users with mental health professionals through an empathetic and accessible interface design.',
      image: '/images/projects/mindspace.jpg',
      category: 'Health Tech',
      tags: ['Healthcare', 'Wellness', 'Platform', 'Accessibility'],
      featured: true,
      link: '#',
      github: '#',
      stats: {
        users: '25K+',
        rating: 4.9,
        year: '2024'
      }
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">
            Crafting digital experiences that
            <span className="gradient-text"> make a difference</span>
          </h2>
          <p className="section-description">
            Here are some of my most impactful projects that showcase my ability to 
            solve complex design challenges and create user-centered solutions.
          </p>
        </motion.div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${index === 0 ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23${index === 0 ? '6366f1' : index === 1 ? '8b5cf6' : 'f59e0b'}'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.link} className="action-btn" aria-label="View Project">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="action-btn" aria-label="View Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
                <div className="category-badge">{project.category}</div>
              </div>

              <div className="project-content">
                <div className="project-stats">
                  <div className="stat">
                    <Star size={16} />
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="stat">
                    <span>{project.stats.users} Users</span>
                  </div>
                  <div className="stat">
                    <span>{project.stats.year}</span>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href={project.link} className="project-link">
                    View Case Study
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="view-all-text">
            Want to see more? Check out my complete portfolio with 100+ projects.
          </p>
          <button 
            className="btn-secondary"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Projects
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .projects {
          padding: 6rem 0;
          background: radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
        }

        .projects-container {
          max-width: 1400px;
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
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 2rem;
          color: var(--accent);
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
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .project-card.featured {
          grid-row: 1 / 3;
        }

        .project-card:hover {
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .project-card.featured .project-image {
          aspect-ratio: 16 / 20;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: var(--primary);
          transform: scale(1.1);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.5rem 1rem;
          background: var(--gradient);
          color: white;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          color: white;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
          z-index: 2;
        }

        .project-content {
          padding: 2rem;
        }

        .project-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 1rem;
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: var(--accent);
          transform: translateX(5px);
        }

        .view-all-section {
          text-align: center;
          padding: 3rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .view-all-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .project-card.featured {
            grid-row: auto;
          }

          .project-card.featured .project-image {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 4rem 0;
          }

          .projects-container {
            padding: 0 1rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-title {
            font-size: 1.25rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .projects-grid {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </motion.section>
  );
}