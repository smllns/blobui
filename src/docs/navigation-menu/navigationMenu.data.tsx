import { Book } from '@/ui/icons/Book';
import { Code } from '@/ui/icons/Code';
import { Compass } from '@/ui/icons/Compass';
import { Gauge } from '@/ui/icons/Gauge';
import { Layers } from '@/ui/icons/Layers';
import { Shield } from '@/ui/icons/Shield';
import { Sparkles } from '@/ui/icons/Sparkles';
import { Zap } from '@/ui/icons/Zap';

export const PRODUCT_ITEMS = [
  {
    icon: <Layers size='lg' />,
    title: 'Design system',
    description: 'Tokens, components and the rules that keep them honest.',
  },
  {
    icon: <Zap size='lg' />,
    title: 'Automations',
    description:
      'Wire the boring half of the workflow to something that never forgets.',
  },
  {
    icon: <Gauge size='lg' />,
    title: 'Analytics',
    description:
      'What people actually did, not what the roadmap hoped you would.',
  },
  {
    icon: <Shield size='lg' />,
    title: 'Access control',
    description: 'Roles, scopes and an audit trail that survives the review.',
  },
];

export const RESOURCES_ITEMS = [
  {
    icon: <Book size='lg' />,
    title: 'Documentation',
    description:
      'Every component, every prop, every state it can be caught in.',
  },
  {
    icon: <Code size='lg' />,
    title: 'API reference',
    description:
      'Endpoints, payloads and the errors they return when you are wrong.',
  },
  {
    icon: <Shield size='lg' />,
    title: 'Security',
    description: 'Sub-processors, retention windows and the audit trail.',
  },
  {
    icon: <Compass size='lg' />,
    title: 'Getting started',
    description: 'From an empty repo to a themed page in about ten minutes.',
  },
];

export const PRODUCT_FEATURE = {
  icon: <Sparkles size='lg' />,
  title: 'What shipped this quarter',
  description:
    'Twelve components, a new token layer and the migration notes for both.',
};
