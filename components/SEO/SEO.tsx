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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🙋‍♂️</text></svg>"
      />
      <link rel="preload" href="/merriweather.woff" as="font" type="font/woff" />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  );
}
