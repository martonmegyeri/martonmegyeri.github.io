import { motion } from 'framer-motion';
import { HTMLProps, useRef } from 'react';
import { usePrefersReducedMotion } from '~/utils/use-prefers-reduced-motion';
import useVisibility from '~/utils/use-visibility';

type Props = HTMLProps<HTMLDivElement | HTMLSpanElement> & {
  as?: 'div' | 'span';
  children: any;
  delay?: number;
};

export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }: Props) {
  const ref = useRef<HTMLDivElement | HTMLSpanElement | null>(null);
  const isVisible = useVisibility(ref);
  const prefersReducedMotion = usePrefersReducedMotion();

  const Element = motion(as);

  return (
    <Element
      ref={ref}
      {...(rest as any)}
      style={{ display: 'inline-block' }}
      transition={{ delay, type: 'spring', damping: 10, mass: 0.75, stiffness: 100 }}
      initial={{ opacity: 0, y: '80%', skewY: '3deg' }}
      whileInView={{ opacity: 1, y: '0%', skewY: '0deg' }}
    >
      {children}
    </Element>
  );
}
