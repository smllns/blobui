import { Icon, type IconProps } from '../Icon';

export function ChevronsLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M19 7 14 12l5 5' />
      <path d='M10 7 5 12l5 5' />
    </Icon>
  );
}
