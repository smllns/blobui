import { Icon, type IconProps } from '../Icon';

export function Laptop(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='12' rx='2.5' />
      <path d='M2 19.5h20' />
    </Icon>
  );
}
