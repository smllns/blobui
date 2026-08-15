import { useSyncExternalStore } from 'react';

const SPLIT_QUERY = '(min-width: 768px)';

function subscribe(onStoreChange: () => void) {
  const query = window.matchMedia(SPLIT_QUERY);

  query.addEventListener('change', onStoreChange);

  return () => query.removeEventListener('change', onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(SPLIT_QUERY).matches;
}

function getServerSnapshot() {
  return true;
}

export function useSplitAvailable() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
