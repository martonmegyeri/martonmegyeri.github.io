import Link from '@/components/Link/Link';
import data from '@/config/data';
import Container from '../Container/Container';
import Reveal from '../Reveal/Reveal';
import styles from './Details.module.scss';

const Details = () => {
  return (
    <Container className={styles.details}>
      <div className={styles.column}>
        <h2 className={styles.title}>
          <Reveal delay={1500}>My latest project</Reveal>
        </h2>
        <Reveal delay={1750}>
          <p className={styles.paragraph}>
            <Link href="https://spiritful.hu" target="_blank" rel="noopener noreferrer">
              spiritful.hu
            </Link>{' '}
            - custom built Shopify storefront with NextJS
          </p>
        </Reveal>
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>
          <Reveal delay={2000}>Contact</Reveal>
        </h2>
        <p className={styles.paragraph}>
          <Reveal as="span" delay={2250}>
            You can find me on <Link href={data.githubUrl}>github</Link> and{' '}
            <Link href={data.linkedinUrl}>linkedin</Link>,
          </Reveal>
          <Reveal as="span" delay={2500}>
            or just send me an email at <Link href={`mailto:${data.email}`}>{data.email}</Link>
          </Reveal>
        </p>
      </div>
    </Container>
  );
};

export default Details;
