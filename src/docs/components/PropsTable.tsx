import { ChevronDown } from '../../ui/ChevronDown';

type Prop = {
  name: string;
  type: string;
  default?: string;
  description?: string;
};

type PropsTableProps = {
  props: Prop[];
};

export function PropsTable({ props }: PropsTableProps) {
  return (
    <section className='space-y-4'>
      <h2 className='text-xl font-semibold pb-2'>Props Table</h2>

      <div className='overflow-hidden rounded-xl border border-neutral-200'>
        <table className='w-full text-sm'>
          <thead className='bg-olive-400/30 text-left'>
            <tr>
              <th className='p-3 font-medium'>Prop</th>
              <th className='p-3 font-medium'>Type</th>
              <th className='p-3 font-medium'>Default</th>
              <th className='p-3 font-medium'>Description</th>
            </tr>
          </thead>

          <tbody className='bg-olive-400/10'>
            {props.map((prop) => (
              <tr key={prop.name} className='border-t border-neutral-100'>
                <td className='p-3 font-medium'>{prop.name}</td>
                <td className='p-3 text-neutral-600'>{prop.type}</td>
                <td className='p-3 text-neutral-600'>
                  {prop.default === 'chevron' ? (
                    <ChevronDown />
                  ) : (
                    (prop.default ?? '-')
                  )}
                </td>
                <td className='p-3 text-neutral-600'>
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
