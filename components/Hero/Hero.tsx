import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import { Coma, Dot, QuotationMark } from '../Text';
import styles from './Hero.module.scss';
import ScrollDownIndicator from './ScrollDownIndicator/ScrollDownIndicator';

const Hero = () => (
  <Container>
    <div className={styles.hero}>
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
    </div>
  </Container>
);

export default Hero;
