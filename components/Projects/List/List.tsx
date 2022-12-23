import classNames from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { RefObject, useRef, useState } from 'react';
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
  const [mousePosition, handleMouseMove] = useRelativeMousePosition(listRef);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.listWrapper}>
      <ul
        ref={listRef}
        className={styles.list}
        onMouseMove={handleMouseMove}
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
        animate={{ top: mousePosition.y, left: mousePosition.x }}
        transition={{ type: 'spring', stiffness: 100, damping: 14 }}
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
        animate={{ top: mousePosition.y, left: mousePosition.x }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      />

      <motion.div
        className={classNames(styles.floatingButtonText, { [styles.active]: isHovering })}
        animate={{ top: mousePosition.y, left: mousePosition.x }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        View
      </motion.div>
    </div>
  );
}

type Position = { x: number; y: number };

function useRelativeMousePosition(ref: RefObject<HTMLElement>): [Position, (e: React.MouseEvent) => void] {
  const prefersReducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.x,
      y: e.clientY - rect.y,
    });
  };

  return [mousePosition, handleMouseMove];
}
