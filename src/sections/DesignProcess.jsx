import { motion } from 'framer-motion';
import { processSteps } from '../data/process';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function DesignProcess() {
  return (
    <section id="process" className="overflow-hidden bg-cream-dark py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Design Process"
          description="A refined six-step journey from initial vision to delivered masterpiece."
          align="center"
        />

        <div className="relative mt-4">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-border lg:block" />

          <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.id}
                delay={index * 0.1}
                className="min-w-[240px] flex-shrink-0 lg:min-w-0"
              >
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-card font-serif text-xl text-gold shadow-sm"
                  >
                    {step.id}
                  </motion.div>

                  <h3 className="mt-5 font-serif text-lg text-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DesignProcess;
