import { useInView } from '../../hooks/useInView';
import { useCounter } from '../../hooks/useCounter';

export function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const count = useCounter(value, duration, 0, isInView);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
