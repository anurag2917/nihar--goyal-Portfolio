import { memo } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const CaseStudyCard = memo(({ study, index }) => {
  const { badge, title, description, image, colSpan, heightClass } = study;
  const shouldReduceMotion = useReducedMotion();
  const featured = index === 0;

  return (
    <m.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: shouldReduceMotion ? 0 : index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[#1A1A1A] border border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.2)] rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between items-start text-left ${heightClass} ${colSpan}`}
    >
      {/* Content */}
      <div className={`relative z-10 flex flex-col gap-4 text-left items-start ${featured ? 'max-w-[85%] lg:max-w-[45%]' : 'max-w-[85%] lg:max-w-[72%]'}`}>
        <span className="text-[11px] tracking-[0.22em] font-semibold uppercase text-[#ff5a00]">
          {badge}
        </span>

        <h3 className={featured ? "text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-serif font-semibold text-white leading-none tracking-tight" : "text-[2.2rem] sm:text-[2.5rem] md:text-[2.7rem] font-serif font-semibold text-white leading-tight tracking-tight"}>
          {title}
        </h3>

        <p className={featured ? "text-white/75 text-lg leading-relaxed max-w-md" : "text-white/70 text-[17px] leading-relaxed max-w-md"}>
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-auto pt-12 pr-20 md:pr-0">
        <a href="#contact" className="text-[12px] font-semibold tracking-[0.18em] uppercase text-white flex items-center gap-2 group-hover:text-[#ff5a00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded">
          Explore Case Study →
        </a>
      </div>

      {/* Circular Arrow Button (Bottom Right) */}
      <div className="absolute bottom-8 right-8 z-20 w-14 h-14 bg-white rounded-full shadow-[0_4px_15px_rgb(0,0,0,0.08)] flex items-center justify-center text-[#ff5a00] transform group-hover:-translate-y-1 transition-transform cursor-pointer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>
    </m.div>
  );
});

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard;
