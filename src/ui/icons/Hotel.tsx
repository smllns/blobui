import { Icon, type IconProps } from '../Icon';

export function Hotel(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='3' width='16' height='18' rx='2.5' />
      <rect x='7' y='5.5' width='10' height='3' rx='1' />
      <rect x='6.5' y='11' width='3' height='3' rx='1' />
      <rect x='14.5' y='11' width='3' height='3' rx='1' />
      <path d='M10 21v-4.5h4V21' />
    </Icon>
  );
}
