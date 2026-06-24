import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryCategories, galleryItems } from '../data/gallery';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '../utils/cn';

const heightMap = {
  short: 'aspect-[4/3]',
  medium: 'aspect-[3/4]',
  tall: 'aspect-[2/3]',
};

export function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Inspiration"
          title="Design Gallery"
          description="Explore our portfolio of curated spaces — each image a chapter in the art of living beautifully."
        />

        <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-charcoal text-cream'
                  : 'border border-border bg-card text-muted hover:border-gold hover:text-gold'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group mb-4 break-inside-avoid overflow-hidden rounded-sm lg:mb-5"
              >
                <div className={cn('relative overflow-hidden', heightMap[item.height])}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  <figcaption className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-tan">
                      {item.category}
                    </span>
                    <p className="mt-1 font-serif text-lg text-white">{item.title}</p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

export default DesignGallery;
