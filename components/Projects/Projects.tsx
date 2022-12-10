import { globalConfig } from '~/config/global';
import Button from '../Button';
import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <Container className={styles.projects}>
      <Heading rank={2} className={styles.title}>
        <Reveal delay={0.2}>Recent</Reveal>
        <Reveal delay={0.4}>Work</Reveal>
      </Heading>

      <ul className={styles.list}>
        <li>
          <Heading rank={4} as="h3" className={styles.itemTitle}>
            Spiritful
          </Heading>
          <span className={styles.type}>Design & Development</span>
        </li>
        <li>
          <Heading rank={4} as="h3" className={styles.itemTitle}>
            Spiritful
          </Heading>
          <span className={styles.type}>Design & Development</span>
        </li>
        <li>
          <Heading rank={4} as="h3" className={styles.itemTitle}>
            Spiritful
          </Heading>
          <span className={styles.type}>Design & Development</span>
        </li>
      </ul>
      <Button onClick={() => window.open(globalConfig.githubUrl)} className={styles.button}>
        More work
      </Button>
    </Container>
  );
}
