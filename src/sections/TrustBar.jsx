import { stats } from '../data/stats';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Container from '../components/ui/Container';
import ScrollReveal from '../components/ui/ScrollReveal';

export function TrustBar() {
  return (
    <section className="border-y border-border bg-cream-dark py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.1} className="text-center">
              <p className="font-serif text-3xl text-charcoal sm:text-4xl md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted sm:text-sm">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustBar;
