import classNames from 'classnames';
import Image from 'next/image';
import shallow from 'zustand/shallow';
import arrow from '~/assets/images/arrow-down.svg';
import scrollToRef from '~/utils/scroll-to-ref';
import styles from './Navigation.module.scss';
import { NavigationId, useNavigationStore } from './store';

type Props = {
  elements: {
    id: NavigationId;
    label: string;
  }[];
};

export default function Navigation({ elements }: Props) {
  const [visibleSection, sectionRefs] = useNavigationStore(state => [state.visibleSection, state.sectionRefs], shallow);

  const handleClick = (id: NavigationId) => {
    const ref = sectionRefs[id];

    if (!ref) return;

    scrollToRef(ref);
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        {elements.map((element, i) => (
          <li key={i}>
            <button
              onClick={() => handleClick(element.id)}
              className={classNames({ [styles.active]: visibleSection === element.id })}
            >
              <Image src={arrow} unoptimized priority alt="" className={styles.arrow} />
              {element.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
