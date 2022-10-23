import type { NextPage } from 'next';
import Details from '~/components/Details';
import Heading from '~/components/Heading';
import Hero from '~/components/Hero';
import HorizontalParallaxText from '~/components/HorizontalParallaxText';
import SEO from '~/components/SEO';
import Spacer from '~/components/Spacer';
import WhoAmI from '~/components/WhoAmI';

const Home: NextPage = () => (
  <>
    <SEO
      title="Marton Megyeri"
      description="Marton Megyeri - a frontend developer who loves creating outstanding web experiences."
    />
    <Hero />
    <WhoAmI />
    <Spacer size={10} />
    <HorizontalParallaxText clones={5} baseVelocity={5}>
      <Heading rank={2}>Lorem ipsum&nbsp;</Heading>
    </HorizontalParallaxText>
    <HorizontalParallaxText clones={5} baseVelocity={-5}>
      <Heading rank={2}>Lorem ipsum&nbsp;</Heading>
    </HorizontalParallaxText>
    <Spacer size={10} />
    <Details />
  </>
);

export default Home;
