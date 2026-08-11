import { Icon, type IconProps } from '../Icon';

export function Wallet(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='6' width='18' height='14' rx='2.5' />
      <path d='M21 10.5h-3.5a2.5 2.5 0 0 0 0 5H21' />
    </Icon>
  );
}
