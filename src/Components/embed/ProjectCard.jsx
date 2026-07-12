import { memo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const ProjectCard = memo(({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
        <div className="ec-thumbnail" style={{ borderRadius: 'inherit', overflow: 'hidden', width: '100%', height: '100%', display: 'block', aspectRatio: project.aspectRatio || '3/4', position: 'relative' }}>
          {/* Branded loading placeholder */}
          {!isVideoLoaded && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
              style={{
                background: 'linear-gradient(135deg, #16161a 0%, #0c0c0e 100%)',
              }}
            >
              {/* Pulsing Orange Dot / Logo Mark */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/5 bg-white/5 relative"
                style={{
                  boxShadow: '0 0 15px rgba(255, 90, 0, 0.1)',
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5a00] animate-ping absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5a00] z-20" />
              </div>
            </div>
          )}

          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              display: 'block',
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out'
            }}
          />
        </div>
      </a>
    </m.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
