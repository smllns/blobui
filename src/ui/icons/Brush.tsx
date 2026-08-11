import { Icon, type IconProps } from '../Icon';

export function Brush(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18.5 4.5a2 2 0 0 0-3 0L9 11l3 3 6.5-6.5a2 2 0 0 0 0-3Z' />
      <path d='M9 11 5 15a4.5 4.5 0 0 0 7 4.5V14' />
    </Icon>
  );
}
