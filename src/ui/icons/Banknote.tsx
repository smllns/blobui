import { Icon, type IconProps } from '../Icon';

export function Banknote(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='7' width='19' height='10' rx='2.5' />
      <circle cx='12' cy='12' r='2.5' />
      <line x1='6' y1='10.5' x2='6' y2='13.5' />
      <line x1='18' y1='10.5' x2='18' y2='13.5' />
    </Icon>
  );
}
