import type { NextPage } from 'next';
import Details from '~/components/Details/Details';
import Hero from '~/components/Hero/Hero';
import SEO from '~/components/SEO/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Marton Megyeri"
        description="Marton Megyeri - a frontend developer who loves creating outstanding web experiences."
      />
      <Hero />
      <Details />
    </>
  );
};

export default Home;
