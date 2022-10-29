import Container from '~/components/Container';
import Link from '~/components/Link';
import Reveal from '~/components/Reveal/Reveal';
import globalConfig from '~/config/global';
import Heading from '../Heading';
import SectionIndex from '../SectionIndex';
import styles from './Contact.module.scss';

const Contact = () => (
  <Container className={styles.contact}>
    <div className={styles.title}>
      <Heading rank={2}>
        <Reveal delay={0.2}>Contact</Reveal>
      </Heading>
      <SectionIndex>{3}</SectionIndex>
    </div>
    <p>
      You can find me on <Link href={globalConfig.githubUrl}>github</Link> and{' '}
      <Link href={globalConfig.linkedinUrl}>linkedin</Link>, or just send me an email at{' '}
      <Link href={`mailto:${globalConfig.email}`}>{globalConfig.email}</Link>
    </p>
  </Container>
);

export default Contact;
