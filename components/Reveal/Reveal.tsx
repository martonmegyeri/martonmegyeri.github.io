import { HTMLProps, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { usePrefersReducedMotion } from '~/utils/use-prefers-reduced-motion';
import useVisibility from '~/utils/use-visibility';

type Props = HTMLProps<HTMLDivElement | HTMLSpanElement> & {
  as?: 'div' | 'span';
  children: any;
  delay?: number;
};

const Reveal = ({ children, delay = 0, as = 'div', className, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement | HTMLSpanElement | null>(null);
  const isVisible = useVisibility(ref);
  const prefersReducedMotion = usePrefersReducedMotion();
  const transition = useSpring({
    delay,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0px, 0) skewY(0deg)' : 'translate3d(0, 80%, 0) skewY(3deg)',
    immediate: prefersReducedMotion,
    config: config.gentle,
  });

  const Element = animated[as];

  return (
    <Element ref={ref as any} {...rest} style={{ display: 'inline-block', ...transition }}>
      {children}
    </Element>
  );
};

export default Reveal;
