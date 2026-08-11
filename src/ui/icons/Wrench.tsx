import { Icon, type IconProps } from '../Icon';

export function Wrench(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M15.5 3 18 6.5 21 5.5a5.5 5.5 0 0 1-7 7l-8 8a2 2 0 0 1-3-3l8-8a5.5 5.5 0 0 1 6.5-6.5Z' />
    </Icon>
  );
}
