import { motion } from 'framer-motion';
import { services } from '../data/services';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          description="Comprehensive design solutions tailored to elevate every aspect of your space — from concept to completion."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full rounded-sm border border-border bg-card p-6 transition-shadow duration-400 hover:shadow-lg sm:p-8"
                >
                  <motion.div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-cream-dark text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="font-serif text-xl text-charcoal">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;
