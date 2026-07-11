import { memo } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const CaseStudyCard = memo(({ study, index }) => {
  const { badge, title, description, image, colSpan, heightClass } = study;
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: shouldReduceMotion ? 0 : index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[#1A1A1A] border border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.2)] rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between ${heightClass} ${colSpan}`}
    >
      {/* Content */}
      <div className="relative z-10 max-w-[85%] sm:max-w-[60%] flex flex-col gap-5">
        <span className="text-[10px] font-bold tracking-widest text-[#ff5a00] uppercase">
          {badge}
        </span>

        <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
          {title}
        </h3>

        <div className="w-6 h-[2px] bg-[#ff5a00]"></div>

        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-auto pt-12">
        <a href="#contact" className="text-[10px] font-bold tracking-widest text-white uppercase flex items-center gap-2 group-hover:text-[#ff5a00] transition-colors outline-none focus:outline-none">
          VIEW CASE STUDY
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="19" x2="19" y2="5"></line>
            <polyline points="9 5 19 5 19 15"></polyline>
          </svg>
        </a>
      </div>

      {/* Circular Arrow Button (Bottom Right) */}
      <div className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgb(0,0,0,0.08)] flex items-center justify-center text-[#ff5a00] transform group-hover:scale-110 transition-transform cursor-pointer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="19" x2="19" y2="5"></line>
          <polyline points="9 5 19 5 19 15"></polyline>
        </svg>
      </div>

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>
    </m.div>
  );
});

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard;
