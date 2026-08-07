import { DocsPage } from '../components/DocsPage';
import { Badge } from '../../components/badge/Badge';
import { componentProps } from '../../lib/props';
import { BadgePlayground } from './BadgePlayground';
import { getInstallation } from '../utils/getInstallation';

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
      installation={getInstallation('badge')}
      props={componentProps.badge}
    />
  );
}
