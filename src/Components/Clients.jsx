import { m } from 'framer-motion';
import TestimonialCard from './clients/TestimonialCard';
import FloatingTestimonialWall from './clients/FloatingTestimonialWall';
import { testimonialsData } from '../data/testimonialsData';

const Clients = () => {
  return (
    <section
      className="relative w-full pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] lg:pb-[50px] overflow-visible font-sans"
      id="clients"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 xl:px-16 flex flex-col gap-8">
        <div className="flex flex-col items-center text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] leading-[1.08] tracking-tight"
          >
            <span className="font-serif font-semibold text-[#0F0F0F]">
              Trusted by Brands{' '}
            </span>

            <span className="font-serif font-semibold italic text-[#ff5a00]">
              That Expect More
            </span>
          </m.h2>
        </div>

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
