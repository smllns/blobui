import { Icon, type IconProps } from '../Icon';

export function Sort(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='7' y1='4' x2='7' y2='20' />
      <path d='M4 7 7 4 10 7' />
      <line x1='17' y1='4' x2='17' y2='20' />
      <path d='M14 17 17 20 20 17' />
    </Icon>
  );
}
