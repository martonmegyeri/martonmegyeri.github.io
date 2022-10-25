import { ReactNode, useEffect, useRef } from 'react';
import shallow from 'zustand/shallow';
import useVisibility from '~/utils/use-visibility';
import { NavigationId, useNavigationStore } from './store';

type Props = {
  id: NavigationId;
  children: ReactNode;
};

export default function NavigationSection({ id, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [changeSectionVisibility, saveSectionRef] = useNavigationStore(
    state => [state.changeSectionVisibility, state.saveSectionRef],
    shallow
  );

  useVisibility(ref, {
    once: false,
    onVisibilityChange: isVisible => changeSectionVisibility(id, isVisible),
  });

  useEffect(() => {
    saveSectionRef(id, ref);
  }, []);

  return <section ref={ref}>{children}</section>;
}
