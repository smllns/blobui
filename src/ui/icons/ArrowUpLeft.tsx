import { Icon, type IconProps } from '../Icon';

export function ArrowUpLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M17.5 17.5 6.5 6.5' />
      <path d='M15.5 6.5h-9v9' />
    </Icon>
  );
}
