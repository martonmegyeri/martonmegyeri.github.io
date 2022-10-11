import classNames from 'classnames';
import Image from 'next/future/image';
import { HTMLAttributes } from 'react';
import arrowDown from './arrow-down.svg';
import styles from './ScrollDownIndicator.module.scss';

type Props = HTMLAttributes<HTMLDivElement>;

const ScrollDownIndicator = (props: Props) => (
  <div {...props} className={classNames(styles.scrollDownIndicator, props.className)}>
    <Image src={arrowDown} unoptimized priority alt="" className={styles.arrow} />
    <div className={styles.rotatingPart}>
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
    </div>
  </div>
);

export default ScrollDownIndicator;
