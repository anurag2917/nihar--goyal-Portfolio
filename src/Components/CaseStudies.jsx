import { m } from 'framer-motion';
import CaseStudyCard from './casestudies/CaseStudyCard';
import { caseStudiesData } from '../data/caseStudiesData';

const CaseStudies = () => {
  return (
    <section className="w-full py-[60px] md:py-[100px] font-sans" id="work">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 xl:px-16">
        <div className="flex flex-col items-center text-center gap-16 md:gap-20">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] leading-[1.12] tracking-tight"
          >
            <span className="font-serif font-semibold text-[#0F0F0F]">
              Work That{' '}
            </span>

            <span className="font-serif font-semibold italic text-[#ff5a00]">
              Moved the Needle
            </span>
          </m.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full text-left">
            {caseStudiesData.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
