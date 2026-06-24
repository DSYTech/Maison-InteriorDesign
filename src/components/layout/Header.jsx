import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { company } from '../../data/company';
import { navLinks } from '../../data/navigation';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
  className={cn(
    'fixed top-0 right-0 left-0 z-50 transition-all duration-[400ms] ease-out',
    isScrolled
      ? 'border-b border-[rgba(176,141,87,0.12)] bg-[rgba(248,245,240,0.92)] py-2.5 shadow-[0_10px_40px_rgba(47,42,37,0.05)] backdrop-blur-[24px]'
      : 'border-b border-transparent bg-transparent py-5 shadow-none backdrop-blur-none'
  )}
  style={
    isScrolled
      ? {
          backgroundColor: 'rgba(248,245,240,0.82)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }
      : {
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
        }
  }
>
      <Container className="flex items-center justify-between">
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wide text-charcoal sm:text-2xl">
            {company.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted transition-colors group-hover:text-gold">
            {company.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="gold">
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-charcoal lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 text-base text-charcoal transition-colors hover:text-gold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                href="#contact"
                variant="gold"
                className="mt-4 w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                Book Consultation
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
