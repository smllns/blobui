import { Icon, type IconProps } from '../Icon';

export function CloudUpload(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 18h11a3 3 0 0 0 0-6 5.5 5.5 0 0 0-11 0 3 3 0 0 0 0 6Z' />
      <line x1='12' y1='15' x2='12' y2='9.5' />
      <path d='M9.5 12 12 9.5 14.5 12' />
    </Icon>
  );
}
