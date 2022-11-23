import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import shallow from 'zustand/shallow';
import arrow from '~/assets/images/arrow-down.svg';
import scrollToRef from '~/utils/scroll-to-ref';
import useMagnet from '~/utils/use-magnet';
import styles from './Navigation.module.scss';
import { NavigationId, useNavigationStore } from './store';

type Element = {
  id: NavigationId;
  label: string;
};

type NavigationProps = {
  elements: Element[];
};

export default function Navigation({ elements }: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {elements.map((element, i) => (
          <NavigationItem key={i} {...element} />
        ))}
      </ul>
    </nav>
  );
}

type NavigationItemProps = Element;

function NavigationItem({ id, label }: NavigationItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const magnetStyles = useMagnet(ref);
  const [visibleSection, sectionRefs] = useNavigationStore(state => [state.visibleSection, state.sectionRefs], shallow);

  const handleClick = (id: NavigationId) => {
    const ref = sectionRefs[id];

    if (!ref) return;

    scrollToRef(ref);
  };

  return (
    <motion.li ref={ref} style={magnetStyles}>
      <button onClick={() => handleClick(id)} className={classNames({ [styles.active]: visibleSection === id })}>
        <Image src={arrow} unoptimized priority alt="" className={styles.arrow} />
        {label}
      </button>
    </motion.li>
  );
}
