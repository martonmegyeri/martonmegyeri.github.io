import { motion, useIsomorphicLayoutEffect, useScroll, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import styles from './SmoothScroll.module.scss';

type Props = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [childrenHeight, setChildrenHeight] = useState(0);
  const { scrollY } = useScroll();
  // As scrollY changes between 0px and the scrollable height, create a negative scroll value
  const transform = useTransform(scrollY, [0, childrenHeight], [0, -childrenHeight]);
  const spring = useSpring(transform, { stiffness: 200, damping: 40 });

  // Observe when browser is resizing
  useIsomorphicLayoutEffect(() => {
    if (!scrollContainerRef.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => setChildrenHeight(entry.contentRect.height));
    resizeObserver.observe(scrollContainerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <motion.div ref={scrollContainerRef} style={{ y: spring }} className={styles.scrollContainer}>
        {children}
      </motion.div>
      {/* Blank div that has the height of the children's content. */}
      {/* This is neccessary to allow the scroll container to use the browser's native scroll bar. */}
      <div style={{ height: childrenHeight }} />
    </>
  );
};

export default SmoothScroll;
