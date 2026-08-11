import { Icon, type IconProps } from '../Icon';

export function Binary(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 4.5 6 3v8' />
      <rect x='13' y='3' width='7' height='8' rx='2' />
      <rect x='4' y='13' width='7' height='8' rx='2' />
      <path d='M16 14.5 18 13v8' />
    </Icon>
  );
}
