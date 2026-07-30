import { useState } from 'react';

export function usePlaygroundState<T extends Record<string, unknown>>(
  initialState: T,
) {
  const [state, setState] = useState(initialState);

  const update = <K extends keyof T>(key: K, value: T[K]) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    state,
    update,
  };
}
