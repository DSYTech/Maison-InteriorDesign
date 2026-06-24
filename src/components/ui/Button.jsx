import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-charcoal text-cream hover:bg-charcoal/90 shadow-sm hover:shadow-md',
  secondary:
    'bg-transparent text-charcoal border border-charcoal/20 hover:border-gold hover:text-gold',
  gold: 'bg-gold text-white hover:bg-gold/90 shadow-sm hover:shadow-md',
  outline:
    'bg-transparent text-cream border border-cream/40 hover:bg-cream/10 hover:border-cream/60',
};

export function Button({
  children,
  variant = 'primary',
  className,
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300',
    variants[variant],
    className
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
