import classnames from 'classnames';
import NextLink from 'next/link';
import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import styles from './Link.module.scss';

type Props = HTMLProps<HTMLElement> & {
  as?: 'button' | 'a';
  children: ReactNode;
  href?: string;
  external?: boolean;
};

function Link({ as, children, className = '', href, external, ...rest }: Props, ref: any) {
  const props = {
    ref,
    ...rest,
    className: classnames(styles.link, {
      [className]: !!className,
    }),
    children: (
      <>
        <span className={styles.text}>{children}</span>
        <span className={styles.visual} aria-hidden="true">
          {children}
        </span>
      </>
    ),
  };

  if (href && external) {
    return <a href={href} {...props} />;
  }

  if (href) {
    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    );
  }

  return React.createElement(as || 'button', props, children);
}

export default forwardRef(Link);
