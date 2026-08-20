import { DocsPage } from '../components/DocsPage';
import { Badge } from '@/components/badge/Badge';
import { componentProps } from '@/lib/props';
import { BadgePlayground } from './BadgePlayground';
import { getInstallation } from '../utils/getInstallation';

export function BadgeDocs() {
  return (
    <DocsPage
      header='Badge'
      description='Badges are used to display a small piece of information.'
      preview={
        <>
          <Badge tone='neutral'>Neutral</Badge>
          <Badge tone='accent'>Accent</Badge>
          <Badge tone='success' dot>
            Success
          </Badge>
          <Badge tone='warning' emphasis='solid'>
            Warning
          </Badge>
          <Badge tone='danger' emphasis='outline'>
            Danger
          </Badge>
        </>
      }
      playground={<BadgePlayground />}
      installation={getInstallation('badge')}
      propSections={componentProps.badge}
    />
  );
}
