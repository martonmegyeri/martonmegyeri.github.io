import Container from '~/components/Container';
import Link from '~/components/Link';
import Reveal from '~/components/Reveal/Reveal';
import globalConfig from '~/config/global';
import Heading from '../Heading';
import styles from './Details.module.scss';

const Details = () => (
  <Container className={styles.details}>
    <div className={styles.column}>
      <Heading rank={4} className={styles.title}>
        <Reveal delay={0.2}>My latest project</Reveal>
      </Heading>
      <Reveal delay={0.2}>
        <p className={styles.paragraph}>
          <Link href="https://spiritful.hu" target="_blank" rel="noopener noreferrer">
            spiritful.hu
          </Link>{' '}
          - custom built Shopify storefront&nbsp;with&nbsp;Next.js
        </p>
      </Reveal>
    </div>
    <div className={styles.column}>
      <Heading rank={4} className={styles.title}>
        <Reveal delay={0.4}>Contact</Reveal>
      </Heading>
      <p className={styles.paragraph}>
        <Reveal delay={0.4} as="span">
          You can find me on <Link href={globalConfig.githubUrl}>github</Link> and{' '}
          <Link href={globalConfig.linkedinUrl}>linkedin</Link>,
        </Reveal>
        <Reveal delay={0.4} as="span">
          or just send me an email at <Link href={`mailto:${globalConfig.email}`}>{globalConfig.email}</Link>
        </Reveal>
      </p>
    </div>
  </Container>
);

export default Details;
