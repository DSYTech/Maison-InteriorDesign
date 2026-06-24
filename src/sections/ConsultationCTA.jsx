import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../utils/images';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export function ConsultationCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img
          src={images.consultation}
          alt="Luxury interior consultation space"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/75" />

      <Container className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-tan"
        >
          Start Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="editorial-heading mx-auto mt-4 max-w-3xl text-3xl text-cream sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Ready To Transform Your Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base text-cream/75 sm:text-lg"
        >
          Schedule a complimentary consultation with our design team and discover
          what&apos;s possible for your home or project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Button href="#contact" variant="gold" className="px-8 py-4 text-base">
            Book Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default ConsultationCTA;
