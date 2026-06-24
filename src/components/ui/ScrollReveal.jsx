import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as: Component = motion.div,
}) {
  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={variants}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;
