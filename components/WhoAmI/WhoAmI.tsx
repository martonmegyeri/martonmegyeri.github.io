import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import SectionIndex from '../SectionIndex';
import StrikethroughText from '../StrikethroughText';
import styles from './WhoAmI.module.scss';

export default function WhoAmI() {
  return (
    <Container className={styles.whoAmI}>
      <div className={styles.title}>
        <Heading rank={2}>
          <Reveal delay={0.2}>Who am I?</Reveal>
        </Heading>
        <SectionIndex>{1}</SectionIndex>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui impedit?
        Quisquam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat <StrikethroughText>quasi labore</StrikethroughText>,
        similique perspiciatis ea qui impedit? Quisquam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui impedit?
        Quisquam.
      </p>
      <p>My motto:</p>
    </Container>
  );
}
