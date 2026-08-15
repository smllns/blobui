import { ChevronDown } from '@/ui/icons/ChevronDown';

type Prop = {
  name: string;
  type: string;
  default?: string;
  description?: string;
};

type PropsTableProps = {
  title?: string;
  props: Prop[];
};

export function PropsTable({ title, props }: PropsTableProps) {
  return (
    <section className='space-y-4'>
      <h2 className='text-heading-lg pb-2 text-fg'>{title}</h2>

      <div className='overflow-x-auto rounded-xl border border-border-subtle'>
        <table className='w-full text-body-sm'>
          <thead className='bg-sunken text-start text-fg-secondary'>
            <tr>
              <th className='p-3 text-start font-medium'>Prop</th>
              <th className='p-3 text-start font-medium'>Type</th>
              <th className='p-3 text-start font-medium'>Default</th>
              <th className='p-3 text-start font-medium'>Description</th>
            </tr>
          </thead>

          <tbody className='bg-surface'>
            {props.map((prop) => (
              <tr key={prop.name} className='border-t border-border-subtle'>
                <td className='p-3 font-medium text-fg'>{prop.name}</td>
                <td className='p-3 font-mono text-caption text-primary-fg'>
                  {prop.type}
                </td>
                <td className='p-3 text-fg-tertiary'>
                  {prop.default === 'chevron' ? (
                    <ChevronDown />
                  ) : (
                    (prop.default ?? '-')
                  )}
                </td>
                <td className='p-3 text-fg-tertiary'>
                  {prop.description || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
