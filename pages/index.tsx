import Details from '@/components/Details/Details';
import FadeIn from '@/components/FadeIn/FadeIn';
import Footer from '@/components/Footer/Footer';
import Introduction from '@/components/Introduction/Introduction';
import SEO from '@/components/SEO/SEO';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative', flexGrow: 1 }}>
      <SEO
        title="Marton Megyeri"
        description="Marton Megyeri - a frontend developer who loves creating outstanding web experiences."
      />
      <FadeIn>
        <Introduction />
        <Details />
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Home;
