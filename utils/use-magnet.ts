import { useReducedMotion, useSpring } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

type MagnetOptions = {
  strength?: number;
  triggerDistanceFactor?: {
    x: number;
    y: number;
  };
};

/**
 * @param options.triggerDistanceFactor `0.0` - only activated within the box of the element, `1.0` - activated within the range of the element * 2
 */
export default function useMagnet(
  ref: RefObject<HTMLElement>,
  { strength = 0.6, triggerDistanceFactor = { x: 0, y: 0 } }: MagnetOptions = {}
) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const springConfig = { stiffness: 300, damping: isHovering ? 50 : 15 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const animate = (mousePosition: { x: number; y: number }) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const isInViewport = rect.top < window.innerHeight && rect.top + rect.height > 0;
      if (!isInViewport) return;

      const position = {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      };
      const positionRelativeToMouse = {
        x: position.x - mousePosition.x,
        y: position.y - mousePosition.y,
      };

      const distanceToTrigger = {
        x: rect.width * (0.5 + triggerDistanceFactor.x),
        y: rect.height * (0.5 + triggerDistanceFactor.y),
      };
      const distanceFromElementCenter = {
        x: Math.abs(position.x - mousePosition.x),
        y: Math.abs(position.y - mousePosition.y),
      };

      const shouldNotTrigger =
        distanceFromElementCenter.x > distanceToTrigger.x || distanceFromElementCenter.y > distanceToTrigger.y;
      if (shouldNotTrigger) {
        setIsHovering(false);
        x.set(0);
        y.set(0);
        return;
      }

      setIsHovering(true);
      x.set(positionRelativeToMouse.x * strength * -1);
      y.set(positionRelativeToMouse.y * strength * -1);
    };

    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => animate({ x: event.clientX, y: event.clientY }));
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    return () => document.body.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { x, y };
}
