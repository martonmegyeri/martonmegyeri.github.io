import classNames from 'classnames';
import React, { forwardRef } from 'react';
import styles from './Heading.module.scss';

export type HeadingRank = 1 | 2 | 3 | 4 | 5;
export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type HeadingProps = Omit<React.HTMLProps<HTMLElement>, 'ref'> & {
  rank: HeadingRank;
  as?: HeadingAs;
  children: React.ReactNode;
  className?: string;
};

function Heading({ rank, as, children, className = '', ...rest }: HeadingProps, ref: any) {
  const Element = as || `h${rank}`;

  return (
    <Element
      ref={ref}
      className={classNames(styles.heading, styles[`heading${rank}`], {
        [className]: !!className,
      })}
      {...rest}
    >
      {children}
    </Element>
  );
}

export default forwardRef(Heading);
