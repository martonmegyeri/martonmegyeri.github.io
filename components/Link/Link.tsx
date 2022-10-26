import classnames from 'classnames';
import NextLink from 'next/link';
import React, {
  ForwardedRef,
  forwardRef,
  HTMLProps,
  ReactNode,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './Link.module.scss';

type Props = HTMLProps<HTMLElement> & {
  as?: 'button' | 'a';
  children: ReactNode;
  href?: string;
  external?: boolean;
};

function Link({ as, children, className = '', href, external, ...rest }: Props, ref: ForwardedRef<HTMLElement>) {
  const innerRef = useRef<HTMLElement>(null);
  const width = useWidth(innerRef);

  useImperativeHandle(ref, () => innerRef.current as HTMLElement);

  console.log('update');

  const props = {
    ref: innerRef as any,
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
        {width && (
          <svg width={width} height={20} className={styles.svgLine}>
            <path d={randomizePath(width)} strokeWidth={window.innerWidth / 200} />
          </svg>
        )}
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

function useWidth(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      if (!ref.current) return;
      setWidth(ref.current.offsetWidth);
    });
    observer.observe(ref.current);

    return () => {
      if (!ref.current) return;
      observer.unobserve(ref.current as HTMLDivElement);
    };
  }, []);

  return width;
}

function randomizePath(linkWidth: number) {
  // TODO: mobile sizes

  console.log(linkWidth);

  const moveYMin = 5; // 200 / 5
  const moveYMax = 12; // 12
  const curveXMin = 20; // 20
  const curveXMax = linkWidth;
  const curveYMin = 5; // 5
  const curveYMax = 20; // 20
  const endYMin = 5; // 5
  const endYMax = 10; // 10
  const moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
  const curveX = Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
  const curveY = Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
  const endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

  return `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth - 7} ${endY}`;
}

export default forwardRef(Link);
