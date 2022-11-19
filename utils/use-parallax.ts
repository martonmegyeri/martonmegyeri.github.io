import { useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

type ParallaxOptions = {
  offset?: number;
};

export default function useParallax(ref: RefObject<HTMLElement>, { offset = 100 }: ParallaxOptions = {}) {
  const prefersReducedMotion = useReducedMotion();
  const [elementAbsY, setElementAbsY] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();
  const start = elementAbsY - clientHeight; // start animating the element when it's scrolled into view
  const end = elementAbsY + offset; // end animation when it's scrolled the offset specified
  const yRange = useTransform(scrollY, [start, end], [offset, -offset]);
  const ySpring = useSpring(yRange, { stiffness: 500, damping: 50 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onResize = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setElementAbsY(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { y: ySpring };
}
