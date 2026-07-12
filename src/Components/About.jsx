import { m, useReducedMotion } from 'framer-motion';
import { focusAreas, whatIDoSkills } from '../data/aboutData';
import SkillCard from './about/SkillCard';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-[60px] md:py-[100px] font-sans" id="about">
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 w-full">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-[2px] mb-8"
          >
            <span className="text-[11px] font-bold tracking-widest text-[#0F0F0F] uppercase">
              About Me
            </span>
            <span className="text-[#ff5a00] text-xl leading-none">.</span>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8"
          >
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] leading-[1.08] text-[#0F0F0F] tracking-tight">
              <span className="block font-serif font-medium">Creative Direction</span>
              <span className="block font-serif font-medium">built for <span className="italic text-[#ff5a00]">business growth.</span></span>
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 mb-16 max-w-md"
          >
            <p className="text-[#0F0F0F] text-[1rem] font-medium leading-relaxed">
              Combining strategic thinking, creative direction, and AI-driven systems to build brands that communicate clearly, scale consistently, and create lasting impact.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl sm:rounded-full p-3 sm:p-2 sm:pr-8 w-full sm:w-auto text-center sm:text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#ff5a00] shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="9 5 19 5 19 15"></polyline>
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#0F0F0F]">
                Available for exciting projects
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200 mx-2"></div>
            <a
              href="#contact"
              className="text-[10px] font-bold tracking-widest text-[#0F0F0F] uppercase flex items-center gap-2 hover:text-[#ff5a00] transition-colors py-2 sm:py-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a00] focus-visible:ring-offset-2 rounded"
            >
              LET'S CONNECT
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
          </m.div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          {/* Top Card */}
          <m.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 sm:p-10 flex flex-col sm:flex-row gap-8 justify-between items-center relative overflow-hidden group"
          >
            <div className="flex flex-col gap-8 relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 border border-orange-100 rounded-full max-w-max">
                <span className="text-[10px] font-bold tracking-widest text-[#ff5a00] uppercase">
                  FOCUS AREAS
                </span>
              </div>
              <ul className="flex flex-col gap-4 text-[1.4rem] font-medium text-[#0F0F0F]">
                {focusAreas.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>

            <div className="relative w-36 h-36 flex items-center justify-center mr-4">
              <m.svg
                animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 100 100"
                className="w-full h-full text-gray-400"
              >
                <path
                  id="textPath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
                <text className="text-[11.5px] font-bold tracking-widest uppercase fill-current">
                  <textPath href="#textPath" startOffset="0%">
                    VISUALS THAT CONNECT • VISUALS THAT CONNECT •
                  </textPath>
                </text>
              </m.svg>
              <div className="absolute text-[#ff5a00] group-hover:scale-110 transition-transform">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="9 5 19 5 19 15"></polyline>
                </svg>
              </div>
            </div>
          </m.div>

          {/* Bottom Card */}
          <m.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 sm:p-10 flex flex-col gap-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 border border-orange-100 rounded-full max-w-max">
              <span className="text-[10px] font-bold tracking-widest text-[#ff5a00] uppercase">
                WHAT I DO
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whatIDoSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default About;
