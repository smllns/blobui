import { Icon, type IconProps } from '../Icon';

export function Package(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='5' y='4' width='14' height='17' rx='2' />
      <line x1='5' y1='10' x2='19' y2='10' />
      <line x1='12' y1='4' x2='12' y2='10' />
    </Icon>
  );
}
