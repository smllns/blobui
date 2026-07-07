import { NavLink } from 'react-router-dom';
import { ChevronDown } from '../../ui/ChevronDown';

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
];

export function Sidebar() {
  return (
    <aside className='w-64 border-r border-neutral-200 bg-neutral-200 p-6'>
      <NavLink to='/' className='block text-xl font-semibold'>
        smllns ui
      </NavLink>

      <div>
        <p className='text-xs font-semibold uppercase tracking-wider text-neutral-500'>
          Components
        </p>

        <nav className='flex flex-col gap-2 pt-4'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'flex items-center justify-between rounded-md border px-3 py-2 transition-colors duration-300',
                  'border-olive-500/20',
                  isActive
                    ? 'bg-olive-400/60 text-neutral-900 shadow-sm'
                    : 'bg-olive-400/30 hover:bg-olive-400/50',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>

                  {isActive && (
                    <ChevronDown className='ml-2 h-4 w-4 text-neutral-800 -rotate-90' />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
