import '@fontsource/major-mono-display/index.css';
import '@fontsource/raleway/variable.css';
import type { AppProps } from 'next/app';
import 'normalize.css';
import Layout from '~/components/Layout';
import '../styles/common.scss';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
