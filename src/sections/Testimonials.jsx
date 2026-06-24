import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export function Testimonials() {
  const scrollRef = useRef(null);
  const duplicated = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      const halfWidth = scrollContainer.scrollWidth / 2;

      if (scrollPos >= halfWidth) {
        scrollPos = 0;
      }

      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', pause);
    scrollContainer.addEventListener('mouseleave', resume);
    scrollContainer.addEventListener('touchstart', pause, { passive: true });
    scrollContainer.addEventListener('touchend', resume, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', pause);
      scrollContainer.removeEventListener('mouseleave', resume);
      scrollContainer.removeEventListener('touchstart', pause);
      scrollContainer.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Trusted by homeowners, developers, and hospitality leaders across the globe."
          align="center"
        />
      </Container>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-5 overflow-x-hidden px-5 sm:gap-6 sm:px-6 lg:px-8"
      >
        {duplicated.map((testimonial, index) => (
          <motion.article
            key={`${testimonial.id}-${index}`}
            className="w-[320px] flex-shrink-0 rounded-sm border border-border bg-card p-6 shadow-sm sm:w-[380px] sm:p-8"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Quote className="h-8 w-8 text-gold/40" />
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="mt-2 flex gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-medium text-charcoal">{testimonial.name}</p>
                <p className="text-xs text-muted">{testimonial.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
