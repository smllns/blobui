import { Icon, type IconProps } from '../Icon';

export function SkipBack(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18 6.5 9 12 18 17.5Z' />
      <line x1='6' y1='6.5' x2='6' y2='17.5' />
    </Icon>
  );
}
