import { memo } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const SkillCard = memo(({ skill }) => {
  const { title, bgClass, textClass, icon } = skill;
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      className="flex flex-col items-center text-center gap-4 cursor-default group"
    >
      <div
        className={`w-[72px] h-[72px] rounded-full ${bgClass} ${textClass} flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <span className="text-[13px] font-bold text-[#0F0F0F]">{title}</span>
    </m.div>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
