import { Icon, type IconProps } from '../Icon';

export function SkipForward(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6 6.5 15 12 6 17.5Z' />
      <line x1='18' y1='6.5' x2='18' y2='17.5' />
    </Icon>
  );
}
