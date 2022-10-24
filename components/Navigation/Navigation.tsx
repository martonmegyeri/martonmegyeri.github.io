import classNames from 'classnames';
import styles from './Navigation.module.scss';
import { NavigationId, useNavigationStore } from './store';

type Props = {
  elements: {
    id: NavigationId;
    label: string;
  }[];
};

export default function Navigation({ elements }: Props) {
  const visibleSection = useNavigationStore(state => state.visibleSection);

  const handleClick = (id: NavigationId) => {
    console.log(id);
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
              {element.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
