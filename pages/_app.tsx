import Layout from '@/components/Layout/Layout';
import '@fontsource/montserrat/variable.css';
import type { AppProps } from 'next/app';
import 'normalize.css';
import '../styles/common.scss';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
