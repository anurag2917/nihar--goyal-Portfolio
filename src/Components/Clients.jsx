import SectionHeader from './common/SectionHeader';
import TestimonialCard from './clients/TestimonialCard';
import FloatingTestimonialWall from './clients/FloatingTestimonialWall';
import { testimonialsData } from '../data/testimonialsData';

const Clients = () => {
  return (
    <section
      className="relative w-full pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] lg:pb-[50px] overflow-visible font-sans"
      id="clients"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 xl:px-16 flex flex-col gap-10">
        <SectionHeader
          badge="Testimonials"
          title1="Trusted by Brands"
          title2="That Expect More"
        />

        {/* ── DESKTOP: premium floating wall (hidden on mobile) ── */}
        <div className="hidden lg:block">
          <FloatingTestimonialWall />
        </div>

        {/* ── MOBILE / TABLET: original grid (hidden on desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 w-full items-stretch overflow-visible">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
