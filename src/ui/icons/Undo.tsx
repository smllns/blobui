import { Icon, type IconProps } from '../Icon';

export function Undo(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 8.5h9a5 5 0 0 1 0 10h-5' />
      <path d='M8 5.5 5 8.5l3 3' />
    </Icon>
  );
}
