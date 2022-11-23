import { useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

type ParallaxOptions = {
  offset?: number;
};

/**
 * Provides a motion value based on the scroll position relative to the element's vertical center point.
 * @param options.offset scroll distance from the center point, both positive and negative
 */
export default function useCenteredParallax(ref: RefObject<HTMLElement>, { offset = 100 }: ParallaxOptions = {}) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [{ start, end }, setBoundaries] = useState({ start: 0, end: 0 });
  const yRange = useTransform(scrollY, [start, end], [offset, -offset]);
  const ySpring = useSpring(yRange, { stiffness: 500, damping: 50 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onResize = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementAbsY = rect.top + window.scrollY;
      setBoundaries({
        start: elementAbsY - window.innerHeight, // start animating the element when it's scrolled into view
        end: elementAbsY + rect.height, // end animation when it's scrolled out of view
      });
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { y: ySpring };
}
