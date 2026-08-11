import { Icon, type IconProps } from '../Icon';

export function Headphones(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 14v-2a7 7 0 0 1 14 0v2' />
      <rect x='3' y='14' width='4' height='6' rx='2' />
      <rect x='17' y='14' width='4' height='6' rx='2' />
    </Icon>
  );
}
