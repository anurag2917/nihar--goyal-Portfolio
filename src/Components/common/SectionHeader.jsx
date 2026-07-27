import { m, useReducedMotion } from 'framer-motion';

const SectionHeader = ({ badge, title1, title2, highlight, desc, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  const renderHeadingContent = () => {
    if (title1 && title2) {
      return (
        <>
          <span className="block font-serif font-semibold text-[#0F0F0F]">
            {title1}
          </span>
          <span className="block font-serif font-semibold italic text-[#ff5a00]">
            {title2}
          </span>
        </>
      );
    }

    if (title1) {
      const targetHighlight = highlight || (typeof title1 === 'string' && title1.includes('Moved the Needle') ? 'Moved the Needle' : null);

      if (targetHighlight && typeof title1 === 'string' && title1.includes(targetHighlight)) {
        const index = title1.indexOf(targetHighlight);
        const prefix = title1.slice(0, index);
        const suffix = title1.slice(index + targetHighlight.length);

        return (
          <>
            <span className="font-serif font-semibold text-[#0F0F0F]">
              {prefix}
            </span>
            <span className="font-serif font-semibold italic text-[#ff5a00]">
              {targetHighlight}
            </span>
            {suffix && (
              <span className="font-serif font-semibold text-[#0F0F0F]">
                {suffix}
              </span>
            )}
          </>
        );
      }

      return (
        <span className="font-serif font-semibold text-[#0F0F0F]">
          {title1}
        </span>
      );
    }

    return null;
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {badge && (
        <m.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-['Inter'] text-[14px] font-semibold tracking-[0.1em] uppercase text-[#ff5a00]">
            {badge}
          </span>
        </m.div>
      )}

      <m.h2
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] leading-[1.04] tracking-tight"
      >
        {renderHeadingContent()}
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
