import classNames from 'classnames';
import { motion, useTransform } from 'framer-motion';
import Image from 'next/future/image';
import { HTMLAttributes } from 'react';
import useScrollVelocityValue from '~/utils/use-scroll-velocity-value';
import arrowDown from './arrow-down.svg';
import styles from './ScrollDownIndicator.module.scss';

type Props = HTMLAttributes<HTMLDivElement>;

export default function ScrollDownIndicator(props: Props) {
  const rotateZ = useScrollVelocityValue({ baseVelocity: 30 });
  const rotateZValue = useTransform(rotateZ, x => `${x}deg`);

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
          <span>&bull;</span>
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
          <span>&bull;</span>
          <span> </span>
        </div>
      </motion.div>
    </div>
  );
}
