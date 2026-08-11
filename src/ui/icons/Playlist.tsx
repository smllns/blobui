import { Icon, type IconProps } from '../Icon';

export function Playlist(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3.5 6h8M3.5 12h8M3.5 18h8' />
      <path d='M15.5 8.5 20.5 12 15.5 15.5Z' />
    </Icon>
  );
}
