import { ReactNode } from 'react';
import FadeIn from '../FadeIn/FadeIn';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <FadeIn>
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    </FadeIn>
  );
};

export default Layout;
