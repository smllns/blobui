import type { RefObject } from 'react';

type TokenRole =
  | 'fill'
  | 'ink'
  | 'edge'
  | 'lift'
  | 'height'
  | 'padding'
  | 'corner'
  | 'type';

type TokenReadoutRow = {
  label: TokenRole;
  token: string;
};

export type TokenReadoutSpec = {
  target: string | RefObject<HTMLElement | null>;
  rows: TokenReadoutRow[];
};

export type TokenReading = TokenReadoutRow & {
  value: string;
  swatch?: string;
};
