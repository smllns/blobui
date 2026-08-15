import { DocsPage } from '../components/DocsPage';
import { HoverCardPlayground } from './HoverCardPlayground';
import { componentProps } from '@/lib/props';
import { previewHoverCards } from './hoverCard.data';
import { PreviewHoverCard } from './PreviewHoverCard';
import { getInstallation } from '../utils/getInstallation';

export function HoverCardDocs() {
  return (
    <DocsPage
      header='Hover card'
      description='A hover card previews content before navigation. It opens on hover and focus, bridges the trigger gap, and becomes an explicit disclosure on touch devices.'
      preview={
        <>
          {previewHoverCards.map((item) => (
            <PreviewHoverCard key={item.id} {...item} />
          ))}
        </>
      }
      playground={<HoverCardPlayground />}
      installation={getInstallation('hoverCard')}
      props={componentProps.hoverCard.root}
      subElementHeader='HoverCardTrigger'
      subElementProps={componentProps.hoverCard.item}
      secondSubElementHeader='HoverCardContent'
      secondSubElementProps={componentProps.hoverCard.item2}
    />
  );
}
