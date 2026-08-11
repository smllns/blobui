import { Icon, type IconProps } from '../Icon';

export function CloudDownload(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 18h11a3 3 0 0 0 0-6 5.5 5.5 0 0 0-11 0 3 3 0 0 0 0 6Z' />
      <line x1='12' y1='9.5' x2='12' y2='15' />
      <path d='M9.5 12.5 12 15 14.5 12.5' />
    </Icon>
  );
}
