import SectionHeader from './common/SectionHeader';
import CaseStudyCard from './casestudies/CaseStudyCard';
import { caseStudiesData } from '../data/caseStudiesData';

const CaseStudies = () => {
  return (
    <section className="w-full py-[60px] md:py-[100px] font-sans" id="work">
      <div className="flex flex-col gap-10">
        <SectionHeader
          badge="Case Studies"
          title1="Work That"
          title2="Moved the Needle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
