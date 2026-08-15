import { useSyncExternalStore } from 'react';

export const COARSE_POINTER_QUERY = '(pointer: coarse)';

const supported = () => typeof window !== 'undefined' && !!window.matchMedia;

function subscribe(onChange: () => void) {
  if (!supported()) return () => {};

  const query = window.matchMedia(COARSE_POINTER_QUERY);
  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
}

const getSnapshot = () =>
  supported() ? window.matchMedia(COARSE_POINTER_QUERY).matches : false;

const getServerSnapshot = () => false;

export function useCoarsePointer() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
