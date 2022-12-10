import Container from '~/components/Container';
import Link from '~/components/Link';
import Reveal from '~/components/Reveal/Reveal';
import { globalConfig } from '~/config/global';
import Heading from '../Heading';
import styles from './Contact.module.scss';

const Contact = () => (
  <Container className={styles.contact}>
    <Heading rank={2} className={styles.title}>
      <Reveal delay={0.2}>Contact</Reveal>
    </Heading>
    <p>
      You can find me on <Link href={globalConfig.githubUrl}>GitHub</Link> and{' '}
      <Link href={globalConfig.linkedinUrl}>LinkedIn</Link>, or just send me an email at{' '}
      <Link href={`mailto:${globalConfig.email}`}>{globalConfig.email}</Link>
    </p>
  </Container>
);

export default Contact;
