import type { NextPage } from 'next';
import Details from '~/components/Details';
import Heading from '~/components/Heading';
import Hero from '~/components/Hero';
import HorizontalParallaxText from '~/components/HorizontalParallaxText';
import Navigation, { NavigationSection } from '~/components/Navigation';
import SEO from '~/components/SEO';
import Spacer from '~/components/Spacer';
import WhoAmI from '~/components/WhoAmI';

const navElements = [
  { id: 'whoAmI', label: 'Who am I?' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Home: NextPage = () => (
  <>
    <SEO
      title="Marton Megyeri"
      description="Marton Megyeri - a frontend developer who loves creating outstanding web experiences."
    />
    <Navigation elements={navElements} />

    <NavigationSection id={navElements[0].id}>
      <Spacer size={10} />
      <Hero />
      <Spacer size={10} />
      <WhoAmI />
    </NavigationSection>

    <Spacer size={10} />

    <NavigationSection id={navElements[1].id}>
      <HorizontalParallaxText clones={8} baseVelocity={5}>
        <Heading rank={2} style={{ letterSpacing: '0.02em' }}>
          Projects&nbsp;&nbsp;
        </Heading>
      </HorizontalParallaxText>
      <HorizontalParallaxText clones={8} baseVelocity={-5}>
        <Heading rank={2} style={{ letterSpacing: '0.02em' }}>
          Projects&nbsp;&nbsp;
        </Heading>
      </HorizontalParallaxText>
    </NavigationSection>

    <Spacer size={10} />

    <NavigationSection id={navElements[2].id}>
      <Details />
    </NavigationSection>

    <Spacer size={5} />
  </>
);

export default Home;
