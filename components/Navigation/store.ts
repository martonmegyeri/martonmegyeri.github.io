import create from 'zustand';

export type NavigationId = string;

interface NavigationState {
  visibleSection: NavigationId | null;
  addVisibleSection: (id: NavigationId) => void;
  removeVisibleSection: (id: NavigationId) => void;
}

export const useNavigationStore = create<NavigationState>(set => {
  const visibleSectionsSet = new Set<NavigationId>();

  const addVisibleSection = (id: NavigationId) => {
    visibleSectionsSet.add(id);
    set({ visibleSection: Array.from(visibleSectionsSet).pop() || null });
  };

  const removeVisibleSection = (id: NavigationId) => {
    visibleSectionsSet.delete(id);
    set({ visibleSection: Array.from(visibleSectionsSet).pop() || null });
  };

  return {
    visibleSection: null,
    addVisibleSection,
    removeVisibleSection,
  };
});
