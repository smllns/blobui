import { Icon, type IconProps } from '../Icon';

export function Calculator(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='5' y='3' width='14' height='18' rx='2' />
      <rect x='8' y='6' width='8' height='3.5' rx='1' />
      <line x1='8.5' y1='13.5' x2='15.5' y2='13.5' />
      <line x1='8.5' y1='17.5' x2='15.5' y2='17.5' />
    </Icon>
  );
}
