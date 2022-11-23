import classnames from 'classnames';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import React, { ForwardedRef, forwardRef, HTMLProps, ReactNode, useMemo, useRef } from 'react';
import useIsClient from '~/utils/use-is-client';
import useMagnet from '~/utils/use-magnet';
import styles from './Link.module.scss';

type Props = HTMLProps<HTMLAnchorElement> & {
  as?: 'button' | 'a';
  children: ReactNode;
  href?: string;
  external?: boolean;
};

function Link(
  { as, children, className: _className, href, external, ...rest }: Props,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const className = classnames(styles.link, _className);

  if (href && external) {
    return (
      <a {...rest} ref={ref} href={href} className={className}>
        <Children>{children}</Children>
      </a>
    );
  }

  if (href) {
    return (
      <NextLink {...rest} ref={ref} href={href} className={className}>
        <Children>{children}</Children>
      </NextLink>
    );
  }

  return React.createElement(as || 'button', { ...rest, ref, className }, <Children>{children}</Children>);
}

const Children = ({ children }: Pick<Props, 'children'>) => {
  const ref = useRef<HTMLSpanElement>(null);
  const magnetStyles = useMagnet(ref, { strength: 0.2 });
  const positionX = useMemo(getRandomPositionXValue, []);
  const isClient = useIsClient();

  return (
    <>
      <motion.span ref={ref} style={magnetStyles} className={styles.children}>
        <span className={styles.actual}>{children}</span>
        <span className={styles.visual} aria-hidden="true">
          {children}
        </span>
      </motion.span>
      {isClient && (
        <span
          className={styles.underline}
          style={
            {
              WebkitMaskPosition: `${positionX}% 50%`,
              maskPosition: `${positionX}% 50%`,
            } as any
          }
        />
      )}
    </>
  );
};

function getRandomPositionXValue() {
  if (typeof window === 'undefined') return 0;

  const MIN = 0;
  const MAX = 100;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

export default forwardRef(Link);
