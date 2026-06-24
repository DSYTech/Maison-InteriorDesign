import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { beforeAfterItems } from '../data/beforeAfter';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = beforeAfterItems[activeIndex];

  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Transformations"
          title="Before & After"
          description="Witness the power of thoughtful design. Drag the slider to reveal stunning transformations."
          align="center"
        />

        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <BeforeAfterSlider
                beforeImage={active.before}
                afterImage={active.after}
              />
              <div className="mt-6 text-center">
                <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{active.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {beforeAfterItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-sm px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-charcoal text-cream'
                    : 'border border-border bg-card text-muted hover:border-gold hover:text-gold'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BeforeAfter;
