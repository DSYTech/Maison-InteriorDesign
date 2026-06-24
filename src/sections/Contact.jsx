import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { company } from '../data/company';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    'w-full rounded-sm border border-border bg-card px-4 py-3.5 text-sm text-charcoal placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30';

  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="We'd love to hear about your project. Reach out and let's begin crafting something extraordinary."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-sm border border-border bg-card p-10 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-dark">
                  <Send className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-charcoal">
                  Thank You
                </h3>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  Your message has been received. Our team will be in touch within
                  24 hours to schedule your consultation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-charcoal">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                      <option value="hospitality">Hospitality</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="Share your vision, timeline, and any details..."
                  />
                </div>

                <Button type="submit" variant="gold" className="w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-cream-dark text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Studio Address</h4>
                    <p className="mt-1 text-sm text-muted">
                      {company.address.street}
                      <br />
                      {company.address.city}
                      <br />
                      {company.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-cream-dark text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Email</h4>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 text-sm text-muted transition-colors hover:text-gold"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-cream-dark text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Phone</h4>
                    <a
                      href={`tel:${company.phone}`}
                      className="mt-1 text-sm text-muted transition-colors hover:text-gold"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-sm border border-border">
                <div className="relative aspect-[16/10] bg-cream-dark">
                  <iframe
                    title="Studio location map"
                    src="https://maps.google.com/maps?q=245+Madison+Avenue+New+York+NY&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-[1.1]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
