import '@fontsource/major-mono-display/index.css';
import '@fontsource/raleway/variable.css';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import 'normalize.css';
import Layout from '~/components/Layout';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <MotionConfig reducedMotion="user">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MotionConfig>
);

export default App;
