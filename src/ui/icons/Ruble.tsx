import { Icon, type IconProps } from '../Icon';

export function Ruble(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M10 18V6h4a3.5 3.5 0 0 1 0 7h-4' />
      <line x1='6.5' y1='16' x2='14' y2='16' />
    </Icon>
  );
}
