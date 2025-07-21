import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Filter, Search, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ProjectGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Generate 100+ projects
  const generateProjects = () => {
    const categories = ['Web Design', 'Mobile App', 'Dashboard', 'E-commerce', 'Landing Page', 'SaaS', 'Branding'];
    const projectNames = [
      'TaskFlow', 'CloudSync', 'EcoTracker', 'FinanceHub', 'HealthCare+', 'TravelMate', 'FoodieApp',
      'MusicStream', 'ChatConnect', 'WorkSpace', 'ShopEase', 'FitTracker', 'BookReader', 'NewsFlow',
      'WeatherPro', 'CalendarApp', 'NoteTaker', 'PhotoEditor', 'VideoCall', 'GameCenter', 'LearnHub',
      'CryptoWallet', 'PodcastApp', 'RecipeBook', 'EventPlanner', 'BudgetTracker', 'SocialConnect',
      'MapExplorer', 'LanguageApp', 'PetCare', 'PlantTracker', 'MeditationApp', 'CodeEditor'
    ];
    
    const projects = [];
    for (let i = 1; i <= 105; i++) {
      const category = categories[Math.floor(Math.random() * categories.length)];
      const name = projectNames[Math.floor(Math.random() * projectNames.length)];
      const colorSchemes = ['6366f1', '8b5cf6', 'f59e0b', '10b981', 'ef4444', '3b82f6', 'f97316'];
      const color = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
      
      projects.push({
        id: i,
        title: `${name} ${i}`,
        category,
        image: `/images/projects/project-${i}.jpg`,
        color,
        year: 2020 + Math.floor(Math.random() * 5),
      });
    }
    return projects;
  };

  const allProjects = generateProjects();
  const categories = ['All', ...new Set(allProjects.map(p => p.category))];

  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.section
      ref={ref}
      id="gallery"
      className="gallery"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-badge">Complete Portfolio</span>
          <h2 className="section-title">
            <span className="gradient-text">100+ Projects</span>
            <br />
            and counting
          </h2>
          <p className="section-description">
            Explore my complete collection of design work spanning various industries 
            and project types. Each piece represents a unique challenge solved through 
            thoughtful design and user experience.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="gallery-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-tabs">
            <Filter size={20} />
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${selectedFilter === category ? 'active' : ''}`}
                onClick={() => setSelectedFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="results-info"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="results-count">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </span>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.9 + (index % 20) * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23${project.color}'/%3E%3Ctext x='50%25' y='45%25' font-size='16' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3E${project.title}%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='12' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3E${project.category}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <a href="#" className="project-link" aria-label="View Project">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .gallery {
          padding: 6rem 0;
          background: linear-gradient(180deg, rgba(245, 158, 11, 0.02) 0%, transparent 50%, rgba(99, 102, 241, 0.02) 100%);
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 2rem;
          color: var(--secondary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .section-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .gallery-controls {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--text-secondary);
          max-width: 400px;
        }

        .search-box input {
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1rem;
          width: 100%;
          outline: none;
        }

        .search-box input::placeholder {
          color: var(--text-muted);
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          color: var(--text-secondary);
        }

        .filter-tab {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-tab:hover,
        .filter-tab.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .results-info {
          margin-bottom: 2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          justify-items: center;
        }

        .project-item {
          width: 100%;
          max-width: 320px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-item:hover {
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-image {
          position: relative;
          aspect-ratio: 3 / 2;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-item:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-item:hover .project-overlay {
          opacity: 1;
        }

        .project-info {
          align-self: flex-end;
        }

        .project-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .project-category {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .project-year {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
        }

        .project-link {
          align-self: flex-start;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--primary);
          transform: scale(1.1);
        }

        .no-results {
          text-align: center;
          padding: 4rem 0;
          color: var(--text-secondary);
        }

        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .gallery {
            padding: 4rem 0;
          }

          .gallery-container {
            padding: 0 1rem;
          }

          .gallery-controls {
            padding: 1.5rem;
          }

          .filter-tabs {
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
          }

          .section-header {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </motion.section>
  );
}