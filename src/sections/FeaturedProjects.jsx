import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A curated selection of our most celebrated interiors — each a testament to refined taste and meticulous craftsmanship."
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer overflow-hidden rounded-sm bg-card shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-charcoal" />
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-tan">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="border-t border-border p-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{project.location}</span>
                    <span className="font-medium text-gold">{project.area}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;
