import { Icon, type IconProps } from '../Icon';

export function ArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 17.5 17.5 6.5' />
      <path d='M8.5 6.5h9v9' />
    </Icon>
  );
}
