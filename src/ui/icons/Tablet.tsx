import { Icon, type IconProps } from '../Icon';

export function Tablet(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3.5' y='2' width='17' height='20' rx='2.5' />
      <path d='M10 19h4' />
    </Icon>
  );
}
