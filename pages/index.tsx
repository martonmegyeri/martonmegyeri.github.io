import Details from '@/components/Details/Details';
import Introduction from '@/components/Introduction/Introduction';
import SEO from '@/components/SEO/SEO';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Marton Megyeri"
        description="Marton Megyeri - a frontend developer who loves creating outstanding web experiences."
      />
      <Introduction />
      <Details />
    </>
  );
};

export default Home;
