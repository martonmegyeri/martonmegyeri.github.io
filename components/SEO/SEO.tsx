import favicon from '@/assets/images/favicon.png';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export default function SEO({ title, description, noIndex }: Props) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" key="description" content={description} />
      <meta name="theme-color" content="#000" />
      <link rel="icon" href={favicon.src} />
      <link rel="preload" href="/merriweather.woff" as="font" type="font/woff" />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  );
}
