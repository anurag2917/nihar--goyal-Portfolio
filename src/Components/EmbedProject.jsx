import { useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { projectsData, projectFilters } from '../data/projectsData';
import ProjectFilters from './embed/ProjectFilters';
import ProjectCard from './embed/ProjectCard';
import SectionHeader from './common/SectionHeader';

const EmbedProject = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Select 6 random cards from the entire pool of projects once when the component mounts
  const allSectionProjects = useMemo(() => {
    const getRandom = (arr, count) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    return getRandom(projectsData, 6);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return allSectionProjects;
    }
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter, allSectionProjects]);

  return (
    <section className="embed-work-section py-[60px] md:py-[100px]" id="work" style={{ position: 'relative', overflow: 'hidden', zIndex: 11 }}>
      <div className="embed-container" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="embed-header mb-12">
          <SectionHeader
            badge="Work"
            title1="Work that"
            title2="performs."
          />
        </div>

        {/* Filters */}
        <ProjectFilters
          filters={projectFilters}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* Projects Grid */}
        <m.div layout className="embed-projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-16 text-center text-gray-500 font-sans"
              >
                No projects found in this category.
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .embed-work-section {
          font-family: 'Inter', sans-serif;
        }
        .embed-grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 0;
          pointer-events: none;
        }

        .embed-filter-btn {
          padding: 8px 20px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          color: #0F0F0F;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .embed-filter-btn:hover {
          border-color: #ff5a00;
          color: #ff5a00;
        }
        .embed-filter-btn.active {
          background: #0F0F0F;
          color: #ffffff;
          border-color: #0F0F0F;
        }

        .embed-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: start;
        }

        .embed-card-wrapper {
          /* float animation removed */
        }

        .embed-card {
          background: #ffffff;
          border: 0.5px solid #eeeeee;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .embed-card-wrapper:hover .embed-card {
          transform: translateY(-8px);
          border-color: #ff5a00;
          box-shadow: 0 15px 35px rgba(255, 90, 0, 0.1);
        }

        .ec-thumbnail {
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          position: relative;
        }
        .ec-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .embed-card:hover .ec-thumbnail img {
          transform: scale(1.05);
        }
        .ec-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          justify-content: center;
        }
        .embed-card:hover .ec-play-overlay {
          opacity: 1;
        }
        .ec-play-overlay svg {
          width: 48px;
          height: 48px;
          color: white;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
        }

        .ec-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .ec-category {
          color: #ff5a00;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .ec-title {
          color: #0F0F0F;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 8px 0;
        }
        .ec-desc {
          color: #888888;
          font-size: 0.95rem;
          margin: 0 0 20px 0;
          line-height: 1.5;
        }
        .ec-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
          margin-top: auto;
        }
        .ec-tool {
          background: #f5f5f5;
          color: #666666;
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: 600;
        }
        .ec-link {
          color: #ff5a00;
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
        }

        /* Overlay */
        .embed-video-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
        }
        .evo-close {
          position: absolute;
          top: 30px;
          right: 40px;
          background: transparent;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .evo-close:hover {
          transform: scale(1.1);
        }
        .evo-iframe-wrapper {
          width: 80vw;
          height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          background: #0F0F0F;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .evo-iframe-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 992px) {
          .embed-projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .embed-projects-grid { grid-template-columns: 1fr; }

          .evo-iframe-wrapper {
            width: 95vw;
            height: 60vh;
          }
          .evo-close {
            top: 15px;
            right: 15px;
          }
          .embed-header h2 { font-size: 2.2rem; }
        }
      `}} />
    </section>
  );
};

export default EmbedProject;
