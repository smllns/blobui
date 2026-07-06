import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function DocsLayout() {
  return (
    <div className='flex min-h-screen bg-neutral-100'>
      <Sidebar />

      <main className='flex-1 p-10'>
        <Outlet />
      </main>
    </div>
  );
}
