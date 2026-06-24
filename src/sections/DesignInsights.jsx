import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blog';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function DesignInsights() {
  return (
    <section id="insights" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Journal"
          title="Design Insights"
          description="Thoughts, trends, and inspiration from our studio — curated for the design-conscious."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {blogPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              delay={index * 0.08}
              className={index === 0 ? 'sm:col-span-2' : ''}
            >
              <motion.article
                whileHover={{ y: -4 }}
                className="group h-full cursor-pointer overflow-hidden rounded-sm bg-card shadow-sm transition-shadow duration-400 hover:shadow-lg"
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-sm bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-charcoal">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className={`mt-3 font-serif text-charcoal ${
                      index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}
                  >
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-gap group-hover:gap-2">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default DesignInsights;
