import { memo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ProjectCard = memo(({ project }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const youtubeId = getYouTubeId(project.videoUrl || project.embedUrl || project.platformUrl);
  const isYouTube = Boolean(project.isYouTube || youtubeId);

  return (
    <m.div
      layout
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="embed-card-wrapper group"
    >
      <a
        href={project.platformUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="embed-card relative block overflow-hidden no-underline rounded-[16px]"
        aria-label={`Watch ${project.title} on original platform`}
        style={{ display: 'block', overflow: 'hidden', textDecoration: 'none', borderRadius: '16px' }}
      >
        <div
          className="ec-thumbnail relative w-full h-full block overflow-hidden"
          style={{
            borderRadius: 'inherit',
            aspectRatio: project.aspectRatio || '9/16',
            position: 'relative',
          }}
        >
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

          {isYouTube && youtubeId ? (
            <>
              {/* High-res YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
                onLoad={() => setIsVideoLoaded(true)}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: isVideoLoaded ? 1 : 0,
                  transition: 'opacity 0.4s ease-in-out, transform 0.5s ease-out',
                }}
              />

              {/* Sleek YouTube Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/45 transition-colors duration-300 z-10">
                <div className="w-14 h-14 rounded-full bg-[#ff5a00]/90 group-hover:bg-[#ff5a00] group-hover:scale-110 flex items-center justify-center text-white shadow-lg transition-all duration-300">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            /* Standard MP4 Video Loop */
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: isVideoLoaded ? 1 : 0,
                transition: 'opacity 0.4s ease-in-out',
              }}
            />
          )}
        </div>
      </a>
    </m.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
