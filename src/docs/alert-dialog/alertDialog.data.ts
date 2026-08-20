export const tones = [
  {
    tone: 'danger',
    trigger: 'Delete workspace',
    variant: 'destructive',
    title: 'Delete “Acme Redesign”?',
    description:
      'This removes the workspace and all 128 files inside it, for everyone. It cannot be undone.',
    cancel: 'Cancel',
    confirm: 'Delete forever',
  },
  {
    tone: 'warning',
    trigger: 'Leave without saving',
    variant: 'secondary',
    title: 'Discard your changes?',
    description:
      'You have edited seven fields since the last save. Leaving now throws them away.',
    cancel: 'Keep editing',
    confirm: 'Discard changes',
  },
  {
    tone: 'info',
    trigger: 'Sign out everywhere',
    variant: 'secondary',
    title: 'Sign out of 4 devices?',
    description:
      'Everyone using this account will have to sign in again, including the two mobile sessions.',
    cancel: 'Cancel',
    confirm: 'Sign out everywhere',
  },
] as const;
