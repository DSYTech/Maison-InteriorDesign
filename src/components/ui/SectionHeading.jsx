import { cn } from '../../utils/cn';
import ScrollReveal from './ScrollReveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  dark = false,
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
        ? 'text-right ml-auto'
        : 'text-left';

  return (
    <ScrollReveal className={cn('mb-12 md:mb-16', alignClass, className)}>
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-xs font-medium uppercase tracking-[0.2em]',
            dark ? 'text-tan' : 'text-gold'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]',
          dark ? 'text-cream' : 'text-charcoal',
          align === 'center' && 'max-w-3xl'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
            dark ? 'text-cream/75' : 'text-muted',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}

export default SectionHeading;
