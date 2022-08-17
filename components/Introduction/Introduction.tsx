import Container from '../Container/Container';
import Reveal from '../Reveal/Reveal';
import Hello from './Hello/Hello';
import styles from './Introduction.module.scss';

const Introduction = () => {
  return (
    <Container className={styles.introduction}>
      <Hello />
      <p className={styles.subTitle}>
        <Reveal as="span" delay={1000}>
          I&lsquo;m Marton Megyeri, a&nbsp;frontend&nbsp;developer
        </Reveal>
        <Reveal as="span" delay={1250}>
          who loves creating outstanding&nbsp;web&nbsp;experiences.
        </Reveal>
      </p>
    </Container>
  );
};

export default Introduction;
