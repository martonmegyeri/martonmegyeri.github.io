import Container from '~/components/Container';
import Link from '~/components/Link';
import Reveal from '~/components/Reveal/Reveal';
import data from '~/config/data';
import styles from './Details.module.scss';

const Details = () => (
  <Container className={styles.details}>
    <div className={styles.column}>
      <h2 className={styles.title}>
        <Reveal delay={1.5}>My latest project</Reveal>
      </h2>
      <Reveal delay={1.75}>
        <p className={styles.paragraph}>
          <Link href="https://spiritful.hu" target="_blank" rel="noopener noreferrer">
            spiritful.hu
          </Link>{' '}
          - custom built Shopify storefront&nbsp;with&nbsp;Next.js
        </p>
      </Reveal>
    </div>
    <div className={styles.column}>
      <h2 className={styles.title}>
        <Reveal delay={2}>Contact</Reveal>
      </h2>
      <p className={styles.paragraph}>
        <Reveal as="span" delay={2.25}>
          You can find me on <Link href={data.githubUrl}>github</Link> and <Link href={data.linkedinUrl}>linkedin</Link>
          ,
        </Reveal>
        <Reveal as="span" delay={2.5}>
          or just send me an email at <Link href={`mailto:${data.email}`}>{data.email}</Link>
        </Reveal>
      </p>
    </div>
  </Container>
);

export default Details;
