import { useLayoutEffect, useRef, useState } from 'react';
import { ROLES, SPACE, TYPE } from './home.data';

const MISSING = '—';

export type RoleReading = {
  name: string;
  swatch: string;
  value: string;
};

export type TypeReading = {
  name: string;
  sample: string;
  size: string;
  leading: string;
};

export type SpaceReading = {
  name: string;
  value: string;
  ratio: number;
};

export type TokenReadings = {
  roles: RoleReading[];
  type: TypeReading[];
  space: SpaceReading[];
};

const PENDING: TokenReadings = {
  roles: ROLES.map(({ name, swatch }) => ({ name, swatch, value: MISSING })),
  type: TYPE.map(({ name, sample }) => ({
    name,
    sample,
    size: MISSING,
    leading: MISSING,
  })),
  space: SPACE.map((step) => ({
    name: `space/${step}`,
    value: MISSING,
    ratio: 0,
  })),
};

function isDefined(token: string) {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue(token)
      .trim() !== ''
  );
}

function read(probe: HTMLElement, property: string, token: string) {
  if (!isDefined(token)) return '';

  probe.style.setProperty(property, `var(${token})`);
  const resolved = getComputedStyle(probe).getPropertyValue(property).trim();
  probe.style.removeProperty(property);

  return resolved;
}

function measure(probe: HTMLElement): TokenReadings {
  const longest =
    parseFloat(read(probe, 'width', `--space-${SPACE[SPACE.length - 1]}`)) || 1;

  return {
    roles: ROLES.map(({ name, token, swatch }) => ({
      name,
      swatch,
      value: read(probe, 'color', token) || MISSING,
    })),

    type: TYPE.map(({ name, sample }) => ({
      name,
      sample,
      size: read(probe, 'font-size', `--text-${name}`) || MISSING,
      leading: read(probe, 'line-height', `--leading-${name}`) || MISSING,
    })),

    space: SPACE.map((step) => {
      const value = read(probe, 'width', `--space-${step}`);

      return {
        name: `space/${step}`,
        value: value || MISSING,
        ratio: (parseFloat(value) || 0) / longest,
      };
    }),
  };
}

export function useTokenReadings() {
  const probeRef = useRef<HTMLDivElement>(null);
  const [readings, setReadings] = useState<TokenReadings>(PENDING);

  useLayoutEffect(() => {
    const probe = probeRef.current;
    if (!probe) return;

    const remeasure = () => setReadings(measure(probe));
    remeasure();

    const observer = new MutationObserver(remeasure);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-accent'],
    });
    const resize = new ResizeObserver(remeasure);
    resize.observe(document.documentElement);

    return () => {
      observer.disconnect();
      resize.disconnect();
    };
  }, []);

  return { probeRef, readings };
}
