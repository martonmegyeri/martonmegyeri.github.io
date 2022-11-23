import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useRef } from 'react';
import arrow from '~/assets/images/arrow-down.svg';
import useMagnet from '~/utils/use-magnet';
import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
  arrowType?: 'link' | 'top';
  children: ReactNode;
};

export default function Button({ onClick, arrowType = 'link', children }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const buttonMagnetStyles = useMagnet(buttonRef, { strength: 0.6 });
  const childrenMagnetStyles = useMagnet(childrenRef, { strength: 0.2 });

  return (
    <motion.button ref={buttonRef} style={buttonMagnetStyles} className={styles.button} onClick={onClick}>
      <motion.div ref={childrenRef} style={childrenMagnetStyles} className={styles.content}>
        <span className={styles.children}>
          <Image src={arrow} unoptimized alt="" className={classNames(styles.arrow, styles[arrowType])} />
          <div className={styles.text}>
            <span className={styles.actual}>{children}</span>
            <span className={styles.visual} aria-hidden="true">
              {children}
            </span>
          </div>
        </span>
      </motion.div>
    </motion.button>
  );
}
