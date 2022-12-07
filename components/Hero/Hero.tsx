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

    <Container className={styles.content}>
      <Heading rank={1}>
        <Reveal delay={1}>
          Hi
          <Coma /> I<QuotationMark />m Marton
          <Coma />
        </Reveal>
        <Reveal delay={1.2}>
          Frontend Developer
          <Coma />
        </Reveal>
        <Reveal delay={1.4}>
          Design Addict
          <Dot />
        </Reveal>
      </Heading>
      <ScrollDownIndicator className={styles.scrollDownIndicator} />
    </Container>

    <Spacer size={5} />
  </div>
);

export default Hero;
