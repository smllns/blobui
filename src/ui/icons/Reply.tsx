import { Icon, type IconProps } from '../Icon';

export function Reply(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 6.5 3.5 12 9 17.5' />
      <path d='M3.5 12h9a7 7 0 0 1 7 7v1.5' />
    </Icon>
  );
}
