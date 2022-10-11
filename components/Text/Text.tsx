import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Text.module.scss';

type Props = {
  children: ReactNode;
  secondary?: boolean;
  darker?: boolean;
};

const Text = ({ children, secondary, darker }: Props) => (
  <span className={classNames(styles.text, { [styles.secondary]: secondary, [styles.darker]: darker })}>
    {children}
  </span>
);

export default Text;
