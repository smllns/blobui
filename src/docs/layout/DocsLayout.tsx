import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function DocsLayout() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    target.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [pathname, hash, key]);

  return (
    <div className='flex min-h-screen bg-canvas'>
      <Sidebar />
      <main className='min-w-0 flex-1 p-(--layout-gutter)'>
        <Outlet />
      </main>
    </div>
  );
}
