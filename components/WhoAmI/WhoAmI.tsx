import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import styles from './WhoAmI.module.scss';

export default function WhoAmI() {
  return (
    <Container className={styles.whoAmI}>
      <Reveal>
        <Heading rank={2} className={styles.title}>
          Who am I?
        </Heading>
      </Reveal>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui impedit?
        Quisquam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui impedit?
        Quisquam.
      </p>
    </Container>
  );
}
