import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import useCenteredParallax from '~/utils/use-centered-parallax';
import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import SectionIndex from '../SectionIndex';
import Spacer from '../Spacer';
import StrikethroughText from '../StrikethroughText';
import me from './me.jpg';
import styles from './WhoAmI.module.scss';

export default function WhoAmI() {
  return (
    <Container className={styles.whoAmI}>
      <div className={styles.title}>
        <Heading rank={2}>
          <Reveal delay={0.2}>Who am I?</Reveal>
        </Heading>
        <SectionIndex>{1}</SectionIndex>
      </div>
      <div className={styles.firstPart}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam explicabo
          similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea qui
          impedit? Quisquam.
        </p>
      </div>
      <Spacer size={15} />
      <div className={styles.secondPart}>
        <Photo />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam
            explicabo similique facere officiis ipsa.
          </p>
          <p>
            Non sequi repellat quaerat <StrikethroughText>quasi labore</StrikethroughText>, similique perspiciatis ea
            qui impedit? Quisquam.
          </p>
        </div>
      </div>
    </Container>
  );
}

function Photo() {
  const ref = useRef<HTMLDivElement>(null);
  const parallaxStyles = useCenteredParallax(ref, { offset: 100 });

  return (
    <motion.div ref={ref} style={parallaxStyles} className={styles.photoWrapper}>
      <span className={styles.label}>Me in New York</span>
      <Image src={me} alt="Photo of me" width={500} height={700} className={styles.photo} />
    </motion.div>
  );
}
