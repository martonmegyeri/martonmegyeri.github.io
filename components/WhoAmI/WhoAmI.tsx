import Container from '../Container';
import Heading from '../Heading';
import Hr from '../Hr';
import Reveal from '../Reveal';
import Spacer from '../Spacer';
import styles from './WhoAmI.module.scss';

export default function WhoAmI() {
  return (
    <Container className={styles.whoAmI}>
      <Reveal delay={0.2}>
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
      <Hr />
      <Spacer size={3} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui impedit?
        Quisquam.
      </p>
    </Container>
  );
}
