import { Icon, type IconProps } from '../Icon';

export function CornerDownLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M17 5.5v8a2 2 0 0 1-2 2H7' />
      <path d='M10 12.5 7 15.5l3 3' />
    </Icon>
  );
}
