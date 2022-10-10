import Container from '../Container';
import Heading from '../Heading';
import { Coma, Dot, QuotationMark } from '../Text';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Container>
      <div className={styles.hero}>
        <Heading rank={1}>
          Hi
          <Coma /> I<QuotationMark />m Marton
          <Coma /> <br />
          Frontend Developer
          <Coma /> <br />
          Design Addict
          <Dot />
        </Heading>
      </div>
    </Container>
  );
};

export default Hero;
