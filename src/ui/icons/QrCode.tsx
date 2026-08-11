import { Icon, type IconProps } from '../Icon';

export function QrCode(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='3' width='7' height='7' rx='2' />
      <rect x='14' y='3' width='7' height='7' rx='2' />
      <rect x='3' y='14' width='7' height='7' rx='2' />
      <rect x='14' y='14' width='4' height='4' rx='1' />
      <path d='M21 14v4M14 21h4' />
    </Icon>
  );
}
