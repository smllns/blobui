import { Icon, type IconProps } from '../Icon';

export function Terminal(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4.5 7 10.5 12 4.5 17' />
      <line x1='13' y1='17' x2='19.5' y2='17' />
    </Icon>
  );
}
