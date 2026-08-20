import { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import { prefersReducedMotion } from '@/lib/prefersReducedMotion';

export const ACCENTS = ['brand', 'violet', 'teal', 'orange'] as const;

export type Theme = 'light' | 'dark';
export type Accent = (typeof ACCENTS)[number];

const THEME_KEY = 'blobui-theme';
const ACCENT_KEY = 'blobui-accent';
const SWITCHING_ATTR = 'data-theme-switching';

const root = () => document.documentElement;

const isAccent = (value: string | undefined): value is Accent =>
  ACCENTS.includes(value as Accent);

const store = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
};

function readTheme(): Theme {
  const attribute = root().dataset.theme;
  if (attribute === 'light' || attribute === 'dark') return attribute;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function readAccent(): Accent {
  const attribute = root().dataset.accent;
  return isAccent(attribute) ? attribute : 'brand';
}

function applyTheme(theme: Theme) {
  const html = root();
  if (html.dataset.theme !== theme) html.dataset.theme = theme;
}

function applyAccent(accent: Accent) {
  const html = root();

  if (accent === 'brand') {
    delete html.dataset.accent;
    return;
  }
  if (html.dataset.accent !== accent) html.dataset.accent = accent;
}

const flushStyles = (html: HTMLElement) => html.getBoundingClientRect();

function duration(token: string) {
  const value = getComputedStyle(root()).getPropertyValue(token).trim();
  const ms = value.endsWith('ms')
    ? Number.parseFloat(value)
    : Number.parseFloat(value) * 1000;

  return Number.isFinite(ms) ? ms : 0;
}

let releaseTimer = 0;

function crossFade(mutate: () => void) {
  if (prefersReducedMotion()) {
    mutate();
    return;
  }

  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(mutate);
    return;
  }

  const html = root();
  html.setAttribute(SWITCHING_ATTR, '');
  flushStyles(html);
  mutate();

  window.clearTimeout(releaseTimer);
  releaseTimer = window.setTimeout(
    () => html.removeAttribute(SWITCHING_ATTR),
    duration('--duration-base') + duration('--duration-instant'),
  );
}

function initialState() {
  const state = { theme: readTheme(), accent: readAccent() };

  applyTheme(state.theme);
  applyAccent(state.accent);

  return state;
}

export function useTheme() {
  const [{ theme, accent }, setState] = useState(initialState);

  const setTheme = useCallback((next: Theme) => {
    crossFade(() => {
      flushSync(() => setState((prev) => ({ ...prev, theme: next })));
      applyTheme(next);
      store(THEME_KEY, next);
    });
  }, []);

  const setAccent = useCallback((next: Accent) => {
    crossFade(() => {
      flushSync(() => setState((prev) => ({ ...prev, accent: next })));
      applyAccent(next);
      store(ACCENT_KEY, next);
    });
  }, []);

  return { theme, accent, setTheme, setAccent };
}
