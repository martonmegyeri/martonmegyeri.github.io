import { MutableRefObject, useEffect, useState } from 'react';

/**
 * Check if an Element is in the viewport, if yes then stop observing it
 * @param ref Element's ref value
 * @param offset Number of pixels up to the observable element from the top
 * @param once If `false` it won't disconnect after one intersection
 */
export default function useVisibility<T extends HTMLElement>(ref: MutableRefObject<T | null>, offset = 0, once = true) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: `0px 0px ${offset}px 0px` }
    );

    observer.observe(ref.current);
  }, [ref]);

  return isVisible;
}
