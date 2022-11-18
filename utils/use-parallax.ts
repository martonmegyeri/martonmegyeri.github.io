import { useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

type ParallaxOptions = {
  offset?: number;
};

export default function useParallax(ref: RefObject<HTMLElement>, { offset = 100 }: ParallaxOptions = {}) {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;
  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 500, damping: 50 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onResize = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { y };
}
