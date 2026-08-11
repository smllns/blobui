import { Icon, type IconProps } from '../Icon';

export function Dollar(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M16 6H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H8' />
      <line x1='12' y1='4' x2='12' y2='20' />
    </Icon>
  );
}
