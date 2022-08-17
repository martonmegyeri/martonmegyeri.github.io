import { ReactNode } from 'react';
import FadeIn from '../FadeIn/FadeIn';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <FadeIn>
      <div className={styles.layout}>
        <main>{children}</main>
        <Footer />
      </div>
    </FadeIn>
  );
};

export default Layout;
