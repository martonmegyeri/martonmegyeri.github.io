import { motion, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Container from '~/components/Container';
import useScrollVelocityValue from '~/utils/use-scroll-velocity-value';
import styles from './HorizontalParallaxText.module.scss';

type Props = {
  children: ReactNode;
  clones?: number;
  baseVelocity?: number;
};

export default function HorizontalParallaxText({ children, clones = 5, baseVelocity = 5 }: Props) {
  const [childWidthPercent, setChildWidthPercent] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const xMotionValue = useScrollVelocityValue({ baseVelocity: baseVelocity });
  const x = useTransform(xMotionValue, x => `${wrap(0, childWidthPercent || 0, x)}%`);

  useEffect(() => {
    if (!scrollerRef.current || !childRef.current) return;

    const observer = new ResizeObserver(() => {
      if (!scrollerRef.current || !childRef.current) return;

      const childWidthPercent = (childRef.current.offsetWidth / scrollerRef.current.offsetWidth) * 100;
      setChildWidthPercent(+childWidthPercent.toFixed(2));
    });
    observer.observe(childRef.current);

    return () => {
      if (!scrollerRef.current || !childRef.current) return;
      observer.unobserve(childRef.current as HTMLDivElement);
    };
  }, []);

  return (
    <Container className={styles.horizontalParallaxText}>
      <motion.div ref={scrollerRef} className={styles.scroller} style={{ x }}>
        <span ref={childRef}>{children}</span>
        {Array.from({ length: clones }).map((_, i) => (
          <span key={i}>{children}</span>
        ))}
      </motion.div>
    </Container>
  );
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
