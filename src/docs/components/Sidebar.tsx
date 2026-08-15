import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeControls } from './ThemeControls';
import { Logo } from './Logo';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import { matchLabel, navGroups, navTotal } from './sidebarNav';

const searchStyles = [
  'h-control-sm w-full rounded-md ps-8 pe-2.5',
  'bg-input text-body-sm text-fg placeholder:text-fg-placeholder',
  'border border-border',
  'transition-colors duration-(--duration-instant) ease-out',
  'hover:border-border-strong',
  'focus-visible:border-border-focus focus-visible:focus-ring focus-visible:outline-none',
].join(' ');

const itemStyles = (isActive: boolean) =>
  [
    'flex items-center justify-between rounded-sm px-2.5 py-2',
    'text-body-md no-underline',
    'transition-colors duration-(--duration-instant) ease-out',
    'focus-visible:focus-ring',
    isActive
      ? 'bg-primary-muted font-medium text-primary-fg'
      : 'text-fg-secondary hover:bg-subtle hover:text-fg',
  ].join(' ');

export function Sidebar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.hash);
  const [query, setQuery] = useState('');

  const needle = query.trim();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = navGroups
      .flatMap((group) => group.items)
      .filter((item) => item.anchor)
      .map((item) => {
        const id = item.to.split('#')[1];
        return id ? document.getElementById(id) : null;
      })
      .filter(
        (element): element is HTMLElement => element instanceof HTMLElement,
      );

    if (!sections.length) return;

    const updateActiveSection = () => {
      const { scrollY, innerHeight } = window;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollY + innerHeight >= documentHeight - 2;

      if (isAtBottom) {
        setActiveSection(`#${sections.at(-1)!.id}`);
        return;
      }

      const offset = innerHeight * 0.25;

      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= offset)
        .at(-1);

      setActiveSection(current ? `#${current.id}` : `#${sections[0].id}`);
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });

    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  const isItemActive = (item: (typeof navGroups)[number]['items'][number]) => {
    if (item.anchor) {
      return location.pathname === '/' && activeSection === item.to.slice(1);
    }

    if (item.to === '/') {
      return location.pathname === '/' && !activeSection;
    }

    return location.pathname === item.to;
  };

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (location.pathname !== '/') return;

    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    target.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    });

    setActiveSection(`#${id}`);
  };

  const groups = useMemo(
    () =>
      navGroups
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) => !needle || matchLabel(item.label, needle),
          ),
        }))
        .filter((group) => group.items.length),
    [needle],
  );

  const visible = groups.flatMap((group) => group.items).length;
  const total = navGroups.flatMap((group) => group.items).length;

  return (
    <aside className='sticky top-0 flex h-screen w-64 shrink-0 flex-col gap-5 overflow-y-auto border-e border-border-subtle bg-surface p-6'>
      <NavLink
        to='/'
        onClick={(event) => handleAnchorClick(event, 'overview')}
        className='rounded-sm no-underline focus-visible:focus-ring'
        aria-label='Blob UI, home'
      >
        <Logo size={24} />
      </NavLink>

      <div className='relative flex items-center'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
          className='pointer-events-none absolute inset-s-2.5 text-fg-placeholder'
        >
          <circle cx='11' cy='11' r='7' />
          <path d='m20 20-3.5-3.5' />
        </svg>

        <input
          type='search'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search components'
          aria-label='Search components'
          className={searchStyles}
        />
      </div>

      <div className='flex flex-col gap-5'>
        {groups.map((group) => (
          <div key={group.label}>
            <p className='px-2.5 text-micro uppercase tracking-wider text-fg-placeholder'>
              {group.label}
            </p>

            <nav className='flex flex-col gap-0.5 pt-2'>
              {group.items.map((item) => {
                const hit = matchLabel(item.label, needle);

                const label = hit ? (
                  <span>
                    {item.label.slice(0, hit.at)}
                    <mark className='rounded-xs bg-warning-subtle text-warning-fg'>
                      {item.label.slice(hit.at, hit.at + hit.length)}
                    </mark>
                    {item.label.slice(hit.at + hit.length)}
                  </span>
                ) : (
                  <span>{item.label}</span>
                );

                const active = isItemActive(item);
                const id = item.to.split('#')[1];

                if (item.anchor) {
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={(event) => handleAnchorClick(event, id)}
                      className={itemStyles(active)}
                      aria-current={active ? 'location' : undefined}
                    >
                      {label}

                      {active && (
                        <ChevronDown size='sm' className='-rotate-90' />
                      )}
                    </Link>
                  );
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={() => itemStyles(active)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}

                    {active && <ChevronDown size='sm' className='-rotate-90' />}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        ))}

        {!visible && (
          <p className='px-2.5 text-body-sm text-fg-tertiary'>
            Nothing by that name.
          </p>
        )}
      </div>

      <div className='mt-auto border-t border-border-subtle pt-6'>
        <p className='pb-4 font-mono text-micro text-fg-placeholder'>
          {needle ? `${visible} of ${total}` : `${navTotal} components`}
        </p>

        <ThemeControls />
      </div>
    </aside>
  );
}
