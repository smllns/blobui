import { NavLink } from 'react-router-dom';
import { ThemeControls } from './ThemeControls';
import { ChevronDown } from '@/ui/icons/ChevronDown';

const navItems = [
  { label: 'Button', to: '/button' },
  { label: 'Input', to: '/input' },
  { label: 'Checkbox', to: '/checkbox' },
  { label: 'Radio', to: '/radio' },
  { label: 'Switch', to: '/switch' },
  { label: 'Badge', to: '/badge' },
  { label: 'Avatar', to: '/avatar' },
  { label: 'Card', to: '/card' },
  { label: 'Select', to: '/select' },
  { label: 'Tooltip', to: '/tooltip' },
  { label: 'Toast', to: '/toast' },
  { label: 'Dropdown', to: '/dropdown' },
  { label: 'Accordion', to: '/accordion' },
  { label: 'Dialog', to: '/dialog' },
  { label: 'Popover', to: '/popover' },
];

export function Sidebar() {
  return (
    <aside className='sticky top-0 flex h-screen w-64 shrink-0 flex-col gap-6 overflow-y-auto border-e border-border-subtle bg-surface p-6'>
      <NavLink
        to='/'
        className='block text-heading-lg font-semibold text-fg no-underline'
      >
        blobui
      </NavLink>

      <div>
        <p className='text-micro uppercase text-fg-tertiary'>Components</p>

        <nav className='flex flex-col gap-0.5 pt-3'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'flex items-center justify-between rounded-sm px-2.5 py-2',
                  'text-body-md no-underline',
                  'transition-colors duration-(--duration-instant) ease-out',
                  'focus-visible:focus-ring',
                  isActive
                    ? 'bg-primary-muted font-medium text-primary-fg'
                    : 'text-fg-secondary hover:bg-subtle hover:text-fg',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>

                  {isActive && <ChevronDown size='sm' className='-rotate-90' />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className='mt-auto border-t border-border-subtle pt-6'>
        <ThemeControls />
      </div>
    </aside>
  );
}
