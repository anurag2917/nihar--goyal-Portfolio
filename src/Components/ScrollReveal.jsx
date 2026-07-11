import { m, useReducedMotion } from 'framer-motion';

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -56 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 56 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

const ScrollReveal = ({
  children,
  variant = 'fade-up',
  duration = 0.75,
  delay = 0,
  margin = '-80px',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const chosen = variants[variant] || variants['fade-up'];

  return (
    <m.div
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={chosen}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default ScrollReveal;
