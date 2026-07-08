import { DocsPage } from '../components/DocsPage';
import { BadgePlayground } from '../components/playground/BadgePlayground';
import { badgeProps } from '../../lib/badgeProps';
import { Badge } from '../../components/badge/Badge';

export function BadgeDocs() {
  return (
    <DocsPage
      header='Badge'
      description='Badges are used to display a small piece of information.'
      preview={
        <>
          <Badge variant='default'>Default</Badge>
          <Badge variant='secondary'>Secondary</Badge>
          <Badge variant='outline'>Outline</Badge>
          <Badge variant='ghost'>Ghost</Badge>
        </>
      }
      playground={<BadgePlayground />}
      props={badgeProps}
    />
  );
}
