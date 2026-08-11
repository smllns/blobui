import { Icon, type IconProps } from '../Icon';

export function Quote(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='7' width='6' height='6' rx='2' />
      <path d='M8 13 6 17' />
      <rect x='14' y='7' width='6' height='6' rx='2' />
      <path d='M18 13 16 17' />
    </Icon>
  );
}
