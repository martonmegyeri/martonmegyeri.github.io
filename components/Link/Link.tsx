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
    className: classnames(styles.link, {
      [className]: !!className,
    }),
    ...rest,
  };

  if (href && external) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <NextLink href={href}>
        <a {...props}>{children}</a>
      </NextLink>
    );
  }

  return React.createElement(as || 'button', props, children);
}

export default forwardRef(Link);
