import { ReactNode, useRef } from 'react';
import shallow from 'zustand/shallow';
import useVisibility from '~/utils/use-visibility';
import { NavigationId, useNavigationStore } from './store';

type Props = {
  id: NavigationId;
  children: ReactNode;
};

export default function NavigationSection({ id, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [addVisibleSection, removeVisibleSection] = useNavigationStore(
    state => [state.addVisibleSection, state.removeVisibleSection],
    shallow
  );

  useVisibility(ref, {
    once: false,
    onVisibilityChange: isVisible => {
      if (isVisible) {
        addVisibleSection(id);
      } else {
        removeVisibleSection(id);
      }
    },
  });

  return <section ref={ref}>{children}</section>;
}
