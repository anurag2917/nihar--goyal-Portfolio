import { useState, useEffect, useCallback } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { navLinks } from '../data/navigationData';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Active-section tracker via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Close on Escape ── */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  /* ── Smooth scroll handler ── */
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
    setActiveSection(id);
    setMenuOpen(false);
  }, [shouldReduceMotion]);

  return (
    <section className="hero">
      {/* Background Effects */}
      <div className="hero__glow hero__glow--portrait"></div>
      <div className="hero__glow hero__glow--right"></div>

      {/* Navigation - Full-Width Layout */}
      <nav className="hero-landing__nav">
        <div className="hero-landing__logo">
          NIHAR GOYAL <span className="hero-landing__logo-dot"></span>
        </div>

        {/* Desktop nav links */}
        <div className="hero-landing__nav-right">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <m.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hero-landing__nav-link font-medium"
                style={{ position: 'relative' }}
                animate={{ opacity: isActive ? 1 : 0.55 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                <m.span
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    x: '-50%',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#ff5a00',
                    display: 'block',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                />
              </m.a>
            );
          })}

          {/* Hamburger button — visible only on mobile */}
          <button
            className="hero-landing__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{ display: 'none' }}  /* shown via CSS below 600px */
          >
          {/* Animated bars */}
          <span style={{
            width: '18px',
            height: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}>
            <m.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block', height: '1.5px', background: '#0F0F0F', borderRadius: '99px', transformOrigin: 'center' }}
            />
            <m.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'block', height: '1.5px', background: '#0F0F0F', borderRadius: '99px' }}
            />
            <m.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block', height: '1.5px', background: '#0F0F0F', borderRadius: '99px', transformOrigin: 'center' }}
            />
          </span>
          </button>
        </div>
      </nav>

      {/* ── Full-screen Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 48px) 48px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 48px) 48px)' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9000,
              background: '#fcfcfc',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '2rem 2.5rem',
            }}
            onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute', top: '1.5rem', right: '1.75rem',
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: '#0F0F0F', fontSize: '1.6rem', lineHeight: 1,
              }}
            >✕</button>

            {/* Brand mark in corner */}
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase', marginBottom: '3rem' }}>
              NIHAR GOYAL <span style={{ color: '#ff5a00' }}>•</span>
            </p>
 
            {/* Nav links — staggered */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', width: '100%' }}>
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <m.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 'clamp(2rem, 8vw, 3.2rem)',
                      fontWeight: 700,
                      color: isActive ? '#ff5a00' : '#0F0F0F',
                      textDecoration: 'none',
                      lineHeight: 1.2,
                      paddingBottom: '0.5rem',
                      borderBottom: '1px solid rgba(0,0,0,0.07)',
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </m.a>
                );
              })}
            </nav>

            {/* Footer tag */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{ position: 'absolute', bottom: '2rem', left: '2.5rem', fontSize: '0.7rem', color: '#999', letterSpacing: '0.1em' }}
            >
              Automated Creative Systems
            </m.p>
          </m.div>
        )}
      </AnimatePresence>

      {/* Center Column: Portrait */}
      <m.div
        className="hero__portrait-container"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, x: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%" }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/assets/nihar-hero-uploaded-clean.png"
          alt="Nihar Goyal - Automated Creative Systems & Creative Direction"
          className="hero__portrait-img"
          fetchPriority="high"
          decoding="async"
          width="400"
          height="550"
        />
      </m.div>

      {/* Three-Column Cinematic Grid */}
      <div className="hero__grid">

        {/* Left Column: Content */}
        <m.div
          className="hero__col-left"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__content-group">
            <span className="hero__kicker">A PARTNER IN</span>
            <h1 className="hero__title">
              <span className="hero__title-nowrap">Your Growth</span><br />Story
            </h1>
            <p className="hero__subcopy">
AI-powered creative systems that transform <br />how your brand is built,managed, and marketed.            </p>
            <div className="hero__cta-wrapper">
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hero__cta">
                <span className="hero__cta-text">Let's Connect</span>
                <span className="hero__cta-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </m.div>

        {/* Center Column: Spacer */}
        <div className="hero__col-center-placeholder"></div>

        {/* Right Column: Secondary Content */}
        <m.div
          className="hero__col-right"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__secondary-text">
            <h2 className="hero__secondary-title">
Stop micromanaging - start leading your market.            </h2>
            <div className="hero__secondary-divider"></div>
            <p className="hero__secondary-desc">
We build your brand, content, and marketing systems so you can focus on growing your business.            </p>
          </div>
        </m.div>

      </div>


    </section>
  );
};

export default Hero;


