import type { NextPage } from 'next';
import Button from '~/components/Button';
import Contact from '~/components/Contact';
import Container from '~/components/Container';
import Heading from '~/components/Heading';
import Hero from '~/components/Hero';
import HorizontalParallaxText from '~/components/HorizontalParallaxText';
import Hr from '~/components/Hr';
import Navigation, { NavigationSection } from '~/components/Navigation';
import Projects from '~/components/Projects';
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
      <Hero />
      <Spacer size={5} />
      <WhoAmI />
    </NavigationSection>

    <Spacer size={10} />

    <Hr />

    <Spacer size={3} />

    <HorizontalParallaxText clones={2} baseVelocity={5}>
      <Heading rank={2} style={{ letterSpacing: '0.02em', fontWeight: 620 }}>
        When you know yourself, you are empowered.&nbsp;&nbsp;
      </Heading>
    </HorizontalParallaxText>
    <HorizontalParallaxText clones={2} baseVelocity={-5}>
      <Heading
        rank={2}
        style={{ letterSpacing: '0.02em', WebkitTextStroke: '1px var(--color-text)', color: 'transparent' }}
      >
        When you accept yourself, you are invincible.&nbsp;&nbsp;
      </Heading>
    </HorizontalParallaxText>

    <Spacer size={3} />

    <Hr />

    <Spacer size={10} />

    <NavigationSection id={navElements[1].id}>
      <Projects />
    </NavigationSection>

    <Spacer size={10} />

    <NavigationSection id={navElements[2].id}>
      <Contact />
    </NavigationSection>

    <Spacer size={10} />

    <Container style={{ display: 'flex', justifyContent: 'end' }}>
      <Button arrowType="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top
      </Button>
    </Container>

    <Spacer size={2} />
  </>
);

export default Home;
