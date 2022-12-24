import classNames from 'classnames';
import { motion, useReducedMotion, useSpring } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { RefObject, useEffect, useRef, useState } from 'react';
import Heading from '~/components/Heading';
import styles from './List.module.scss';

type Props = {
  items: {
    title: string;
    type: string;
    url?: string;
    color: string;
    image: StaticImageData;
  }[];
};

export default function List({ items }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const floatingBoxRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const floatingBoxPosition = useRelativeSpringMousePosition(listRef, { stiffness: 100, damping: 14 });
  const floatingButtonPosition = useRelativeSpringMousePosition(listRef, { stiffness: 180, damping: 18 });
  const floatingButtonTextPosition = useRelativeSpringMousePosition(listRef, { stiffness: 200, damping: 18 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.listWrapper}>
      <ul
        ref={listRef}
        className={styles.list}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {items.map((item, i) => (
          <li key={i} onMouseEnter={() => setActiveIndex(i)}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Heading rank={4} as="h3" className={styles.itemTitle}>
                {item.title}
              </Heading>
              <span className={styles.type}>{item.type}</span>
            </a>
          </li>
        ))}
      </ul>

      <motion.div
        ref={floatingBoxRef}
        className={classNames(styles.floatingBox, { [styles.active]: isHovering })}
        style={{ top: floatingBoxPosition.y, left: floatingBoxPosition.x }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.imageWrapper}
            style={{
              backgroundColor: item.color,
              transform: `translate3d(0, -${activeIndex * (floatingBoxRef.current?.offsetHeight || 0)}px, 0)`,
            }}
          >
            <Image src={item.image} fill alt="" />
          </div>
        ))}
      </motion.div>

      <motion.div
        className={classNames(styles.floatingButton, { [styles.active]: isHovering })}
        style={{ top: floatingButtonPosition.y, left: floatingButtonPosition.x }}
      />

      <motion.div
        className={classNames(styles.floatingButtonText, { [styles.active]: isHovering })}
        style={{ top: floatingButtonTextPosition.y, left: floatingButtonTextPosition.x }}
      >
        View
      </motion.div>
    </div>
  );
}

type SpringOptions = {
  stiffness: number;
  damping: number;
};

function useRelativeSpringMousePosition(ref: RefObject<HTMLElement>, springOptions: SpringOptions) {
  const prefersReducedMotion = useReducedMotion();
  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const setInitialXPositionToVerticalCenter = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      x.set(rect.width / 2);
    };

    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        x.set(event.clientX - rect.x);
        y.set(event.clientY - rect.y);
      });
    };

    setInitialXPositionToVerticalCenter();

    ref.current?.addEventListener('mousemove', handleMouseMove);
    return () => ref.current?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { x, y };
}
