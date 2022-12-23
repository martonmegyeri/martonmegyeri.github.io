import { default as project1, default as project2, default as project3 } from '~/assets/images/projects/spiritful.png';
import { globalConfig } from '~/config/global';
import Button from '../Button';
import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import List from './List/List';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <Container className={styles.projects}>
      <Heading rank={2} className={styles.title}>
        <Reveal delay={0.2}>Recent</Reveal>
        <Reveal delay={0.4}>Work</Reveal>
      </Heading>

      <List
        items={[
          {
            title: 'Spiritful',
            type: 'Design & Development',
            url: 'https://spiritful.hu',
            color: 'darksalmon',
            image: project1,
          },
          {
            title: 'Spiritful',
            type: 'Design & Development',
            url: 'https://spiritful.hu',
            color: 'lightblue',
            image: project2,
          },
          {
            title: 'Spiritful',
            type: 'Design & Development',
            url: 'https://spiritful.hu',
            color: 'indianred',
            image: project3,
          },
        ]}
      />

      <Button onClick={() => window.open(globalConfig.githubUrl)} className={styles.button}>
        More work
      </Button>
    </Container>
  );
}
