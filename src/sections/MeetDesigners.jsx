import { motion } from 'framer-motion';
import { designers } from '../data/designers';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function MeetDesigners() {
  return (
    <section id="designers" className="bg-cream-dark py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Team"
          title="Meet Our Designers"
          description="A collective of visionary creatives united by a passion for exceptional interiors."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {designers.map((designer, index) => (
            <ScrollReveal key={designer.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-sm bg-card shadow-sm transition-shadow duration-400 hover:shadow-lg"
              >
                <div className="grid md:grid-cols-5">
                  <div className="relative aspect-[4/5] overflow-hidden md:col-span-2 md:aspect-auto">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8 lg:p-10">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                      {designer.specialty}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-charcoal lg:text-3xl">
                      {designer.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {designer.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {designer.bio}
                    </p>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MeetDesigners;
