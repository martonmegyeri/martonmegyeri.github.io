import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import { Coma, Dot, QuotationMark } from '../SecondaryText';
import Spacer from '../Spacer';
import Background from './Background/Background';
import styles from './Hero.module.scss';
import ScrollDownIndicator from './ScrollDownIndicator/ScrollDownIndicator';

const Hero = () => (
  <div className={styles.hero}>
    <Spacer size={10} />

    <Background />

    <Container>
      <Heading rank={1}>
        <Reveal delay={0.4}>
          Hi
          <Coma /> I<QuotationMark />m Marton
          <Coma />
        </Reveal>
        <Reveal delay={0.6}>
          Frontend Developer
          <Coma />
        </Reveal>
        <Reveal delay={0.8}>
          Design Addict
          <Dot />
        </Reveal>
      </Heading>
      <ScrollDownIndicator className={styles.scrollDownIndicator} />
    </Container>
  </div>
);

export default Hero;
