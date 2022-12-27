import { ReactNode } from 'react';
import FadeIn from '../FadeIn';
import SmoothScroll from '../SmoothScroll';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <FadeIn>
    <SmoothScroll>
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    </SmoothScroll>
  </FadeIn>
);

export default Layout;
