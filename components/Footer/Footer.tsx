import data from '@/config/data';
import Container from '../Container/Container';
import Link from '../Link/Link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.me}>{'{ marton: megyeri }'}</div>
        <div className={styles.linksContainer}>
          <span>
            Have a great day!{' '}
            <span className={styles.emoji} aria-hidden="true">
              👋
            </span>
          </span>
          <div className={styles.links}>
            <Link href={data.githubUrl}>github</Link>
            <Link href={data.linkedinUrl}>linkedin</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
