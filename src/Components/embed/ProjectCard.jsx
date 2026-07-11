import { memo } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const ProjectCard = memo(({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      layout
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="embed-card-wrapper"
    >
      <a
        href={project.platformUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="embed-card"
        aria-label={`Watch ${project.title} on original platform`}
        style={{ display: 'block', overflow: 'hidden', textDecoration: 'none', borderRadius: '16px' }}
      >
        <div className="ec-thumbnail" style={{ borderRadius: 'inherit', overflow: 'hidden', width: '100%', height: '100%', display: 'block', aspectRatio: project.aspectRatio || '3/4' }}>
          <video
            src={project.videoUrl}
            poster={project.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </a>
    </m.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
