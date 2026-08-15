import { createStrictContext } from '@/lib/createContext';
import { useContext } from 'react';

type NavigationMenuContextValue = {
  setContentRef: (element: HTMLDivElement | null) => void;
};

export const [NavigationMenuContext, useNavigationMenuContext] =
  createStrictContext<NavigationMenuContextValue>('NavigationMenu');

export function useInNavigationMenu() {
  return useContext(NavigationMenuContext) !== null;
}
