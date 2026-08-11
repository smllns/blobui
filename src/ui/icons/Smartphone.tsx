import { Icon, type IconProps } from '../Icon';

export function Smartphone(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='7' y='2' width='10' height='20' rx='2' />
      <path d='M10 19h4' />
    </Icon>
  );
}
