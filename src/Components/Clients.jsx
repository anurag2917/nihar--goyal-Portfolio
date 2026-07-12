import SectionHeader from './common/SectionHeader';
import TestimonialCard from './clients/TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';

const Clients = () => {
  return (
    <section className="relative w-full py-[60px] md:py-[100px] overflow-visible font-sans" id="clients">
      <div className="w-full flex flex-col gap-12">
        <SectionHeader
          badge="Testimonials"
          title1="Real feedback."
          title2="Real impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch overflow-visible">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
