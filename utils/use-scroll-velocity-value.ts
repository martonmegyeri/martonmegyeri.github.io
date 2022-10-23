import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import { useRef } from 'react';

type Options = {
  baseVelocity?: number;
};

export default function useScrollVelocityValue({ baseVelocity = 50 }: Options = {}) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const directionFactor = useRef<number>(1); // 1 = right, -1 = left
  const value = useMotionValue(0);

  useAnimationFrame((_time, delta) => {
    const velocityFactorValue = velocityFactor.get();

    // This is what changes the direction of the scroll once we
    // switch scrolling directions.
    if (velocityFactorValue < 0) {
      directionFactor.current = -1;
    }
    if (velocityFactorValue > 0) {
      directionFactor.current = 1;
    }

    const moveByBase = directionFactor.current * baseVelocity * (delta / 1000);
    const moveByAdditional = directionFactor.current * moveByBase * velocityFactorValue;
    const moveBy = moveByBase + moveByAdditional;
    value.set(value.get() + moveBy);
  });

  return value;
}
