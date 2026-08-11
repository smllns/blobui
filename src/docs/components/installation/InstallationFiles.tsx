import { gsap } from 'gsap';
import { CodeBlock } from '../CodeBlock';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import type { InstallationFile } from './installation.types';
import { groupFiles } from './installation.utils';

export function InstallationFiles({ files }: { files: InstallationFile[] }) {
  const groups = groupFiles(files);

  const handleToggle = (event: React.MouseEvent<HTMLMapElement>) => {
    event.preventDefault();

    const summary = event.currentTarget;
    const details = summary.parentElement as HTMLDetailsElement | null;

    if (!details) return;

    const content = details.querySelector<HTMLElement>('[data-content]');
    const icon = details.querySelector<SVGElement>('[data-chevron]');

    if (!content || !icon) return;

    const isOpen = details.open;

    if (!isOpen) {
      details.open = true;

      gsap.fromTo(
        content,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.25,
          ease: 'power2.out',
        },
      );

      gsap.to(icon, {
        rotate: 180,
        duration: 0.25,
        ease: 'power2.out',
      });

      return;
    }

    const currentHeight = content.offsetHeight;

    gsap.fromTo(
      content,
      {
        height: currentHeight,
        opacity: 1,
      },
      {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          details.open = false;
        },
      },
    );

    gsap.to(icon, {
      rotate: 0,
      duration: 0.2,
      ease: 'power2.in',
    });
  };

  return (
    <div className='flex flex-col gap-2'>
      {groups.map((group) => (
        <details
          key={group.name}
          className='overflow-hidden rounded-lg border border-border-subtle bg-surface'
        >
          <summary
            onClick={handleToggle}
            className='flex cursor-pointer list-none items-center gap-2 p-3 transition-colors hover:bg-subtle [&::-webkit-details-marker]:hidden'
          >
            <ChevronDown
              data-chevron
              className='size-icon-sm text-fg-tertiary'
            />

            <span className='flex-1 text-body-md font-medium text-fg'>
              {group.name}
            </span>

            <span className='text-body-sm text-fg-tertiary'>
              {group.files.length} {group.files.length === 1 ? 'file' : 'files'}
            </span>
          </summary>

          <div
            data-content
            className='flex flex-col gap-4 overflow-hidden border-t border-border-subtle p-3'
          >
            {group.files.map((file) => (
              <CodeBlock key={file.path} code={file.code} title={file.path} />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
