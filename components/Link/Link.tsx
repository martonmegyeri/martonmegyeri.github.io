import classnames from 'classnames';
import NextLink from 'next/link';
import React, { ForwardedRef, forwardRef, HTMLProps, ReactNode } from 'react';
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
      <NextLink href={href}>
        <a {...rest} ref={ref} className={className}>
          <Children>{children}</Children>
        </a>
      </NextLink>
    );
  }

  return React.createElement(as || 'button', { ...rest, ref, className }, <Children>{children}</Children>);
}

const MIN = 0;
const MAX = 100;

const Children = ({ children }: Pick<Props, 'children'>) => {
  const random = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  return (
    <>
      <span className={styles.children}>
        <span className={styles.text}>{children}</span>
        <span className={styles.visual} aria-hidden="true">
          {children}
        </span>
      </span>
      <div
        className={styles.underline}
        style={
          {
            '-webkit-mask-position': `${random}% 50%`,
            'mask-position': `${random}% 50%`,
          } as any
        }
      />
    </>
  );
};

export default forwardRef(Link);
