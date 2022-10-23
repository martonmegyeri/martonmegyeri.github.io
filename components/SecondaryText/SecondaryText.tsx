import { ReactNode } from 'react';
import styles from './SecondaryText.module.scss';

type Props = {
  children: ReactNode;
};

const SecondaryText = ({ children }: Props) => <span className={styles.secondaryText}>{children}</span>;

export default SecondaryText;
