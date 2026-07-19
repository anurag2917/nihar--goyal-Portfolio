import { useEffect, memo } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';

const VideoModal = memo(({ activeVideo, onClose }) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeVideo) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeVideo, onClose]);

  return (
    <AnimatePresence>
      {activeVideo && (
        <m.div
          className="embed-video-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'linear' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Video Player: ${activeVideo.title}`}
        >
          <button className="evo-close" onClick={onClose} aria-label="Close Video Player">
            ✕
          </button>
          <m.div
            className="evo-iframe-wrapper"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo.embedUrl}
              title={activeVideo.title}
              frameBorder="0"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
});

VideoModal.displayName = 'VideoModal';

export default VideoModal;
