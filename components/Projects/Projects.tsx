import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import SectionIndex from '../SectionIndex';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <Container className={styles.projects}>
      <div className={styles.title}>
        <SectionIndex>{2}</SectionIndex>
        <Heading rank={2}>
          <Reveal delay={0.2}>Projects</Reveal>
        </Heading>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
        similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui impedit?
        Quisquam.
      </p>
      <p className={styles.comingSoon}>More projects coming soon ...</p>
    </Container>
  );
}
