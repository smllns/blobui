import { Icon, type IconProps } from '../Icon';

export function Euro(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18 8A6 6 0 1 0 18 16' />
      <line x1='6' y1='10' x2='15.5' y2='10' />
      <line x1='6' y1='14' x2='15.5' y2='14' />
    </Icon>
  );
}
