import Heading from '../Heading';
import Reveal from '../Reveal';
import styles from './SectionIndex.module.scss';

type Props = {
  children: number;
};

const MIN_NUMBERS = 3;

export default function SectionIndex({ children }: Props) {
  const numberOfLeadingZeros = MIN_NUMBERS - children.toString().length;
  const charArray = [...new Array(numberOfLeadingZeros).fill(0), children];

  return (
    <Heading rank={5} className={styles.sectionIndex}>
      <Reveal delay={0.2} as="span">
        (
      </Reveal>
      {charArray.map((char, i) => (
        <Reveal key={i} delay={0.2 * (i + 2)} as="span">
          {char}
        </Reveal>
      ))}
      <Reveal delay={0.2 * (charArray.length + 2)} as="span">
        )
      </Reveal>
    </Heading>
  );
}
