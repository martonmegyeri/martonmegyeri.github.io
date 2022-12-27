import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import useCenteredParallax from '~/utils/use-centered-parallax';
import Container from '../Container';
import Heading from '../Heading';
import Reveal from '../Reveal';
import Spacer from '../Spacer';
import StrikethroughText from '../StrikethroughText';
import me from './me.jpg';
import styles from './WhoAmI.module.scss';

export default function WhoAmI() {
  return (
    <div className={styles.whoAmI}>
      <Container>
        <Heading rank={2} className={styles.title}>
          <Reveal delay={0.2}>Who am I?</Reveal>
        </Heading>
        <div className={styles.firstPart}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam
            explicabo similique facere officiis ipsa. Non sequi repellat quaerat quasi labore, similique perspiciatis ea
            qui impedit? Quisquam.
          </p>
        </div>
        <Spacer size={10} />
        <div className={styles.secondPart}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum repellat qui architecto, laboriosam
            explicabo.
          </p>
          <p>
            Non sequi repellat quaerat <StrikethroughText>quasi labore</StrikethroughText>, similique perspiciatis ea
            qui impedit? Quisquam.
          </p>
        </div>
      </Container>
      <Photo />
    </div>
  );
}

function Photo() {
  const ref = useRef<HTMLDivElement>(null);
  const parallaxStyles = useCenteredParallax(ref, { offset: 100 });

  return (
    <div className={styles.photo}>
      <motion.div ref={ref} style={parallaxStyles} className={styles.parallaxWrapper}>
        <Image src={me} alt="Photo of me" fill />
      </motion.div>
    </div>
  );
}
