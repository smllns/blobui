import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function DocsLayout() {
  return (
    <div className='flex min-h-screen bg-canvas'>
      <Sidebar />
      <main className='min-w-0 flex-1 p-(--layout-gutter)'>
        <Outlet />
      </main>
    </div>
  );
}
