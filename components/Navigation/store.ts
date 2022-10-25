import create from 'zustand';

export type NavigationId = string;

type SectionRef = React.RefObject<HTMLElement>;

type NavigationState = {
  visibleSection: NavigationId | null;
  sectionRefs: {
    [id: NavigationId]: SectionRef;
  };
  changeSectionVisibility: (id: NavigationId, isVisible: boolean) => void;
  saveSectionRef: (id: NavigationId, ref: SectionRef) => void;
};

export const useNavigationStore = create<NavigationState>(set => {
  const visibleSectionsSet = new Set<NavigationId>();

  const changeSectionVisibility = (id: NavigationId, isVisible: boolean) => {
    if (isVisible) {
      visibleSectionsSet.add(id);
    } else {
      visibleSectionsSet.delete(id);
    }
    set({ visibleSection: Array.from(visibleSectionsSet).pop() });
  };

  const saveSectionRef = (id: string, ref: SectionRef) => {
    set(state => ({
      sectionRefs: {
        ...state.sectionRefs,
        [id]: ref,
      },
    }));
  };

  return {
    visibleSection: null,
    sectionRefs: {},
    changeSectionVisibility,
    saveSectionRef,
  };
});
