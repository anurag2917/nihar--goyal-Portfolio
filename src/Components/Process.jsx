import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { processSteps } from '../data/processData';

// Helper to get custom premium SVG icons for each step
const getStepIcon = (step) => {
  switch (step) {
    case '01':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case '02':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
        </svg>
      );
    case '03':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5-1.5 5 1.5-.813-5.096M21 3s-3.75 0-6 3a6 6 0 00-6 6v3h3a6 6 0 006-6c3-2.25 3-6 3-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      );
    default:
      return null;
  }
};

const Process = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      className="process-section w-full py-[60px] md:py-[100px] relative overflow-hidden font-sans flex items-center"
      id="process"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 xl:px-16">
        <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-flow {
          0% {
            stroke-dashoffset: 150;
          }
          100% {
            stroke-dashoffset: -150;
          }
        }
        .pulse-line {
          stroke-dasharray: 25 125;
          animation: pulse-flow 6s linear infinite;
        }
        @media (min-width: 1024px) and (max-width: 1260px) {
          .process-card-container {
            width: 220px !important;
          }
        }
      `}} />

      {/* Desktop / Large Screens Layout */}
      <div className="hidden lg:block w-full relative h-[650px]">
        {/* Header Block */}
        <div className="absolute left-0 top-[6%] w-[34%] max-w-[420px] z-30">
          <SectionHeader
            badge="Process"
            title1="Our"
            title2="Process"
            desc="A clear, collaborative process designed to help your brand grow with confidence."
          />
        </div>

        {/* Timeline Content Wrapper shifted down by 35px to prevent top clipping of Card 2 */}
        <div className="absolute inset-0 transform translate-y-[35px]">
          {/* The Animated SVG Path Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
              aria-hidden="true"
              role="presentation"
            >
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffd8c2" />
                  <stop offset="30%" stopColor="#ff9f66" />
                  <stop offset="65%" stopColor="#ff7b30" />
                  <stop offset="100%" stopColor="#ff5a00" />
                </linearGradient>
                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 90, 0, 0)" />
                  <stop offset="50%" stopColor="#ff5a00" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgba(255, 90, 0, 0)" />
                </linearGradient>
              </defs>

              {/* The Background Wavy Track */}
              <path
                d="M 8 55 C 14 55, 20 60, 26 60 C 34 60, 43 38, 50 38 C 58 38, 68 60, 76 60 C 83 60, 89 55, 94 55"
                stroke="#f5ebe6"
                strokeWidth="1.2"
                fill="none"
              />

              {/* The Animated Wavy Line */}
              <m.path
                d="M 8 55 C 14 55, 20 60, 26 60 C 34 60, 43 38, 50 38 C 58 38, 68 60, 76 60 C 83 60, 89 55, 94 55"
                stroke="url(#line-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-25px' }}
                transition={{ duration: shouldReduceMotion ? 0 : 2.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* The Glowing Pulse that flows along the path */}
              <m.path
                d="M 8 55 C 14 55, 20 60, 26 60 C 34 60, 43 38, 50 38 C 58 38, 68 60, 76 60 C 83 60, 89 55, 94 55"
                stroke="url(#pulse-gradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                className="pulse-line"
              />
            </svg>
          </div>

          {/* HTML Content for Nodes and Hanging/Rising Alternating Cards */}
          {processSteps.map((stepItem, idx) => {
            const isHovered = activeStep === idx;
            const isBelow = stepItem.step !== '02'; // Phase 1 and 3 hang below, Phase 2 rises above

            return (
              <div
                key={stepItem.step}
                style={{
                  position: 'absolute',
                  left: `${stepItem.x}%`,
                  top: `${stepItem.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                }}
                className="flex flex-col items-center"
              >
                {/* Perfect Circle HTML Node */}
                <m.div
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-25px' }}
                  transition={shouldReduceMotion ? { duration: 0.3 } : { delay: stepItem.delay - 0.2, duration: 0.4, type: 'spring' }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative w-8 h-8 rounded-full bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center cursor-pointer transition-all duration-300 z-30"
                  style={{
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                  }}
                >
                  {/* Inner core dot */}
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-[#ff5a00] transition-transform duration-300"
                    style={{
                      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />

                  {/* Ping shadow animation on hover */}
                  {isHovered && (
                    <span className="absolute inset-0 rounded-full border-2 border-[#ff5a00] animate-ping opacity-35" />
                  )}
                </m.div>

                {/* Visual Connector Line with Traveling Energy Dot */}
                <div
                  className="absolute w-[1.5px] transition-all duration-300"
                  style={{
                    [isBelow ? 'top' : 'bottom']: '16px',
                    height: isBelow ? '64px' : '36px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: isHovered ? '#ff5a00' : '#ffd8c2',
                    opacity: isHovered ? 1 : 0.6,
                  }}
                >
                  {isHovered && (
                    <m.div
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#ff5a00] shadow-[0_0_8px_#ff5a00]"
                      initial={{ y: isBelow ? 0 : 36 }}
                      animate={{ y: isBelow ? 64 : 0 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      style={{ left: '-2.25px' }}
                    />
                  )}
                </div>

                {/* Alternating Card Container (Below or Above) */}
                <m.div
                  initial={{ 
                    opacity: 0, 
                    y: shouldReduceMotion ? 0 : (isBelow ? 30 : -30) 
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-25px' }}
                  transition={{ delay: shouldReduceMotion ? 0 : stepItem.delay * 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`absolute ${isBelow ? 'top-20' : 'bottom-[52px]'} left-1/2 -translate-x-1/2 w-[280px] cursor-default group/card process-card-container`}
                >
                  {/* Premium Glassmorphic Card */}
                  <div className="w-full bg-white/75 backdrop-blur-md border border-gray-100/90 shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_50px_rgba(255,90,0,0.07)] hover:border-[#ff5a00]/35 hover:-translate-y-2 rounded-[2rem] p-6 transition-all duration-500 flex flex-col gap-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold px-2.5 py-1 bg-orange-50 text-[#ff5a00] rounded-full">
                          {stepItem.step}
                        </span>
                        <span className="text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                          {stepItem.step === '01' ? 'Phase 01' : stepItem.step === '02' ? 'Phase 02' : 'Phase 03'}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-orange-50/70 text-[#ff5a00] flex items-center justify-center group-hover/card:bg-[#ff5a00] group-hover/card:text-white transition-all duration-500">
                        {getStepIcon(stepItem.step)}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[1.05rem] font-bold text-[#0F0F0F] mb-2 group-hover/card:text-[#ff5a00] transition-colors duration-300">
                        {stepItem.title}
                      </h3>
                      <p className="text-gray-500 text-[0.8rem] leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                </m.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet Screens Layout (Alternating rhythm preserved) */}
      <div className="lg:hidden w-full flex flex-col gap-10 px-0">
        <div>
          <SectionHeader
            badge="Process"
            title1="Our"
            title2="Process"
            desc="A streamlined, AI-enhanced workflow designed to execute your vision without draining your bandwidth."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:py-10">
          {processSteps.map((stepItem, idx) => {
            const isLeft = idx % 2 === 0; // Alternate slide-in directions for rhythm

            return (
              <m.div
                key={stepItem.step}
                initial={{ 
                  opacity: 0, 
                  x: shouldReduceMotion ? 0 : (isLeft ? -30 : 30) 
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: shouldReduceMotion ? 0 : stepItem.delay * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-start w-full bg-white border border-gray-100/80 shadow-[0_12px_35px_rgba(0,0,0,0.015)] rounded-[2rem] p-6 hover:shadow-[0_20px_50px_rgba(255,90,0,0.06)] hover:border-[#ff5a00]/20 hover:-translate-y-1.5 transition-all duration-500 group/card ${
                  idx === 1 ? 'md:-translate-y-6' : 'md:translate-y-6'
                }`} // Alternating zig-zag shift on tablet grid!
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 bg-orange-50 text-[#ff5a00] rounded-full">
                      {stepItem.step}
                    </span>
                    <span className="text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                      {stepItem.step === '01' ? 'Phase 01' : stepItem.step === '02' ? 'Phase 02' : 'Phase 03'}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-orange-50/70 text-[#ff5a00] flex items-center justify-center group-hover/card:bg-[#ff5a00] group-hover/card:text-white transition-all duration-500">
                    {getStepIcon(stepItem.step)}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F0F0F] mb-2 group-hover/card:text-[#ff5a00] transition-colors duration-300">
                    {stepItem.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
