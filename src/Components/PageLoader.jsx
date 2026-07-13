import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Letter-by-letter stagger for a word
───────────────────────────────────────────── */
const LetterReveal = ({ text, className, delay = 0 }) => {
  const letters = text.split('');
  return (
    <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.04,
          }}
          style={{ display: 'inline-block' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Main Loader
───────────────────────────────────────────── */
const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('enter'); // enter → fill → exit

  /* Simulate loading progress */
  useEffect(() => {
    let raf;
    let start = null;
    const duration = 2200; // ms for bar to reach 100%

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Short pause at 100% then exit
        setTimeout(() => {
          setPhase('exit');
          setTimeout(onComplete, 700);
        }, 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'radial-gradient(circle at 50% 30%, #fffdfa 0%, #fdf8f1 50%, #faf1e5 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Subtle grid overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }} />

          {/* Logo / Brand name */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: 64 }}>
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#ff5a00',
                marginBottom: 20,
              }}
            >
              Creative Direction
            </motion.p>

            {/* Name — staggered letters */}
            <h1 style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 800,
              color: '#0F0F0F',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              overflow: 'hidden',
            }}>
              <LetterReveal text="Nihar" delay={0.25} />
              {' '}
              <LetterReveal
                text="Goyal"
                delay={0.55}
                className="accent-word"
              />
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                color: '#666666',
                marginTop: 16,
                letterSpacing: '0.05em',
              }}
            >
              Automated Creative Systems
            </motion.p>
          </div>

          {/* Progress bar container */}
          <div style={{ position: 'relative', zIndex: 1, width: 'clamp(200px, 35vw, 360px)' }}>
            {/* Track */}
            <div style={{
              height: 1,
              background: 'rgba(0,0,0,0.1)',
              borderRadius: 99,
              overflow: 'hidden',
            }}>
              {/* Fill */}
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #ff5a00, #ff8c42)',
                  borderRadius: 99,
                  width: `${progress}%`,
                  boxShadow: '0 0 12px rgba(255,90,0,0.6)',
                }}
              />
            </div>

            {/* Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                color: '#444',
                marginTop: 12,
                textAlign: 'right',
                letterSpacing: '0.05em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>

          {/* Corner accents */}
          {[
            { top: 24, left: 24 },
            { top: 24, right: 24 },
            { bottom: 24, left: 24 },
            { bottom: 24, right: 24 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
              style={{
                position: 'absolute',
                width: 14,
                height: 14,
                borderTop: pos.top !== undefined ? '1px solid rgba(255,90,0,0.4)' : 'none',
                borderBottom: pos.bottom !== undefined ? '1px solid rgba(255,90,0,0.4)' : 'none',
                borderLeft: pos.left !== undefined ? '1px solid rgba(255,90,0,0.4)' : 'none',
                borderRight: pos.right !== undefined ? '1px solid rgba(255,90,0,0.4)' : 'none',
                ...pos,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
