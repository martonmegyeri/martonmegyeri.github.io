import classNames from 'classnames';
import { createElement, forwardRef, HTMLProps, ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = HTMLProps<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

function Container({ className = '', children, as = 'div', ...rest }: Props, ref: any) {
  return createElement(
    as,
    {
      ref,
      className: classNames(styles.container, {
        [className]: !!className,
      }),
      ...rest,
    },
    children
  );
}

export default forwardRef(Container);
