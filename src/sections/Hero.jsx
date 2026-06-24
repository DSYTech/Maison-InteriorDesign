import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../utils/images';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

const floatingLabels = [
  { text: 'Luxury Villas', position: 'top-[18%] right-[8%]', delay: 0 },
  { text: 'Modern Apartments', position: 'bottom-[28%] left-[6%]', delay: 0.2 },
  { text: 'Commercial Interiors', position: 'bottom-[12%] right-[12%]', delay: 0.4 },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-cream pt-24 pb-12 md:pt-28 lg:pb-0">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold"
            >
              Award-Winning Interior Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="editorial-heading text-balance text-4xl text-charcoal sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]"
            >
              Designing Timeless Spaces For Modern Living
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              We craft bespoke interiors that blend architectural precision with
              warm, lived-in elegance — transforming houses into sanctuaries and
              spaces into stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button href="#contact" variant="gold">
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </motion.div>
          </div>

          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[3/4] lg:aspect-[4/5]"
            >
              <motion.img
                style={{ y: imageY }}
                src={images.hero}
                alt="Luxury interior living space with warm natural tones"
                className="h-[115%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            </motion.div>

            {floatingLabels.map((label) => (
              <motion.span
                key={label.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + label.delay }}
                className={`absolute ${label.position} hidden rounded-sm border border-white/20 bg-white/90 px-4 py-2 text-xs font-medium tracking-wide text-charcoal shadow-lg backdrop-blur-sm sm:block`}
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: label.delay,
                  }}
                  className="block"
                >
                  {label.text}
                </motion.span>
              </motion.span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
