import { Icon, type IconProps } from '../Icon';

export function PageBreak(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18 9V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4' />
      <path d='M6 15v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4' />
      <path d='M3 12h3M10.5 12h3M18 12h3' />
    </Icon>
  );
}
