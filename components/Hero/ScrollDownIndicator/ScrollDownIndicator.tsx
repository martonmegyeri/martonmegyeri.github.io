import classNames from 'classnames';
import { motion, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import arrowDown from '~/assets/images/arrow-down.svg';
import useScrollVelocityValue from '~/utils/use-scroll-velocity-value';
import styles from './ScrollDownIndicator.module.scss';

type Props = HTMLAttributes<HTMLDivElement>;

export default function ScrollDownIndicator(props: Props) {
  const rotateZ = useScrollVelocityValue({ baseVelocity: 50 });
  const rotateZSpring = useSpring(rotateZ, { stiffness: 300, damping: 50 });
  const rotateZValue = useTransform(rotateZSpring, x => `${x}deg`);

  return (
    <div {...props} className={classNames(styles.scrollDownIndicator, props.className)}>
      <Image src={arrowDown} unoptimized priority alt="" className={styles.arrow} />
      <motion.div className={styles.rotatingPart} style={{ rotateZ: rotateZValue }}>
        <div className={styles.chars}>
          <span>S</span>
          <span>c</span>
          <span>r</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
          <span> </span>
          <span>D</span>
          <span>o</span>
          <span>w</span>
          <span>n</span>
          <span> </span>
          <span className={styles.bullet}>&bull;</span>
          <span> </span>
          <span>S</span>
          <span>c</span>
          <span>r</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
          <span> </span>
          <span>D</span>
          <span>o</span>
          <span>w</span>
          <span>n</span>
          <span> </span>
          <span className={styles.bullet}>&bull;</span>
          <span> </span>
        </div>
      </motion.div>
    </div>
  );
}
