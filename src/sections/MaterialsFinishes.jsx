import { motion } from 'framer-motion';
import { materials } from '../data/materials';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function MaterialsFinishes() {
  return (
    <section className="bg-cream-dark py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Curated Selection"
          title="Materials & Finishes"
          description="Every surface tells a story. We source the world's finest materials to create interiors of lasting beauty."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {materials.map((material, index) => (
            <ScrollReveal key={material.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img
                  src={material.image}
                  alt={material.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-xl text-white">{material.name}</h3>
                  <p className="mt-1 text-xs text-cream/70 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                    {material.description}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-tan opacity-100 transition-all duration-300 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {material.texture}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MaterialsFinishes;
