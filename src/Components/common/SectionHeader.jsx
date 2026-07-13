import { m, useReducedMotion } from 'framer-motion';

const SectionHeader = ({ badge, title1, title2, desc, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <m.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-widest text-[#ff5a00] uppercase">
          {badge}
        </span>
        <span className="text-[#ff5a00] text-lg leading-none -mt-1">•</span>
      </m.div>

      <m.h2
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(3.4rem,4.25vw,4.25rem)] leading-[1.05] tracking-tight text-[#0F0F0F]"
      >
        {title1 && <span className="block font-serif font-medium">{title1}</span>}
        {title2 && <span className="block font-serif italic text-[#ff5a00]">{title2}</span>}
      </m.h2>

      {desc && (
        <m.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#666] text-lg leading-relaxed max-w-[280px]"
        >
          {desc}
        </m.p>
      )}
    </div>
  );
};

export default SectionHeader;
