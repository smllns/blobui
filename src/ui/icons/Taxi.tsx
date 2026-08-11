import { Icon, type IconProps } from '../Icon';

export function Taxi(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='10.5' width='19' height='5' rx='2' />
      <path d='M6 10.5 7.5 6.5a1.5 1.5 0 0 1 1.5-1h6a1.5 1.5 0 0 1 1.5 1l1.5 4' />
      <rect x='9.5' y='3' width='5' height='2.5' rx='1' />
      <circle cx='7' cy='17.5' r='2' />
      <circle cx='17' cy='17.5' r='2' />
    </Icon>
  );
}
