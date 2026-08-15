import { createContext, useContext } from 'react';

export function createStrictContext<T>(name: string) {
  const Context = createContext<T | null>(null);

  const useStrictContext = () => {
    const context = useContext(Context);

    if (!context) {
      throw new Error(`${name} components must be used inside ${name}.`);
    }

    return context;
  };

  return [Context, useStrictContext] as const;
}
