import { ReactNode } from 'react';
import styles from './StrikethroughText.module.scss';

type Props = {
  children: ReactNode;
};

const StrikethroughText = ({ children }: Props) => <span className={styles.strikethroughText}>{children}</span>;

export default StrikethroughText;
