type Props = Omit<React.AllHTMLAttributes<HTMLSpanElement>, 'size'> & {
  size: number | `${number}px` | `${number}%`;
  axis?: 'vertical' | 'horizontal';
  // TODO: add breakpoint support?
};

/**
 * Creates space between two elements.
 *
 * It renders a span with specified dimensions.
 * Why `span`? According to the HTML spec, `div`s aren't supposed to
 * be put within certain elements, like `p` and `button`.
 * `span` is a much more flexible tag for this purpose.
 *
 * Inspired by: https://www.joshwcomeau.com/react/modern-spacer-gif/
 */
export default function Spacer({ size, axis, ...rest }: Props) {
  const { width, height } = getDimensions(size, axis);

  return (
    <span
      {...rest}
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...rest.style,
      }}
    />
  );
}

function getDimensions(size: Props['size'], axis: Props['axis']) {
  const sizeValue = typeof size === 'number' ? `${size}vw` : size;

  return {
    width: axis === 'vertical' ? '1px' : sizeValue,
    height: axis === 'horizontal' ? '1px' : sizeValue,
  };
}
