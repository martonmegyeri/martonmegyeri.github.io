import classnames from 'classnames';
import NextLink from 'next/link';
import React, { ForwardedRef, forwardRef, HTMLProps, ReactNode } from 'react';
import useIsClient from '~/utils/use-is-client';
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
  const positionX = getRandomPositionXValue();
  const isClient = useIsClient();

  return (
    <>
      <span className={styles.children}>
        <span className={styles.text}>{children}</span>
        <span className={styles.visual} aria-hidden="true">
          {children}
        </span>
      </span>
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
