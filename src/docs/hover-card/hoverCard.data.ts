export type PreviewHoverCardItem = {
  id: string;
  triggerVariant: 'underline' | 'unstyled';
  triggerKind: 'text' | 'avatar';
  triggerLabel: string;
  href: string;
  name: string;
  handle: string;
  initials: string;
  bio: string;
  meta: string;
  loading?: boolean;
  showCloseButton?: boolean;
  caption: string;
};

export const previewHoverCards: PreviewHoverCardItem[] = [
  {
    id: 'underline',
    triggerVariant: 'underline',
    triggerKind: 'text',
    triggerLabel: '@priya',
    href: '',
    name: 'Priya Raman',
    handle: '@priya',
    initials: 'PR',
    bio: 'Design systems lead. Keeps the tokens honest and the components boring.',
    meta: 'Joined 2021',
    caption: 'underline — the dotted rule says "there is more here if you ask"',
  },
  {
    id: 'bare',
    triggerVariant: 'unstyled',
    triggerKind: 'avatar',
    triggerLabel: 'MK',
    href: '',
    name: 'Marius Kok',
    handle: '@marius',
    initials: 'MK',
    bio: 'Ships the CLI. Reviews everything twice and the changelog three times.',
    meta: 'Joined 2019',
    caption: 'bare — an avatar already carries its own affordance',
  },
  {
    id: 'loading',
    triggerVariant: 'underline',
    triggerKind: 'text',
    triggerLabel: '@ana',
    href: '',
    name: 'Ana Duarte',
    handle: '@ana',
    initials: 'AD',
    bio: 'Writes the docs nobody thought they needed.',
    meta: 'Joined 2023',
    loading: true,
    caption:
      'loading — opens at once, at its final width, inert while it fills',
  },
];
