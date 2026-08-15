import { Avatar } from '@/components/avatar/Avatar';
import {
  HoverCard,
  HoverCardBody,
  HoverCardContent,
  HoverCardFooter,
  HoverCardHeader,
  HoverCardSubtitle,
  HoverCardTitle,
  HoverCardTrigger,
} from '@/components/hover-card/HoverCard';
import type { PreviewHoverCardItem } from './hoverCard.data';

export function PreviewHoverCard({
  triggerVariant,
  triggerKind,
  triggerLabel,
  href,
  name,
  handle,
  initials,
  bio,
  meta,
  loading,
  showCloseButton,
  caption,
}: PreviewHoverCardItem) {
  return (
    <div className='flex w-60 flex-col items-center gap-3 text-center'>
      <span className='text-body-md text-fg-secondary'>
        Reviewed by{' '}
        <HoverCard>
          <HoverCardTrigger variant={triggerVariant}>
            {triggerKind === 'avatar' ? (
              <Avatar size='sm' fallback={triggerLabel} />
            ) : (
              triggerLabel
            )}
          </HoverCardTrigger>

          <HoverCardContent loading={loading} showCloseButton={showCloseButton}>
            <HoverCardHeader>
              <Avatar fallback={initials} />

              <div className='flex min-w-0 flex-col'>
                <HoverCardTitle>{name}</HoverCardTitle>
                <HoverCardSubtitle>{handle}</HoverCardSubtitle>
              </div>
            </HoverCardHeader>

            <HoverCardBody>{bio}</HoverCardBody>

            <HoverCardFooter>
              <span>{meta}</span>
              <a className='text-link' href={href}>
                Full profile
              </a>
            </HoverCardFooter>
          </HoverCardContent>
        </HoverCard>
      </span>

      <span className='text-caption text-fg-tertiary'>{caption}</span>
    </div>
  );
}
