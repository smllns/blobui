import { Icon, type IconProps } from '../Icon';

export function Chip(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='6' y='5' width='12' height='14' rx='2' />
      <path d='M2 8h4M2 12h4M2 16h4' />
      <path d='M18 8h4M18 12h4M18 16h4' />
    </Icon>
  );
}
