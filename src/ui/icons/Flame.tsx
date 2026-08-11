import { Icon, type IconProps } from '../Icon';

export function Flame(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 2.5c1 2.5 2.5 4 4 6 1.5 2 2 3.5 2 5.5a6 6 0 0 1-12 0c0-2 .5-3.5 1.5-4.5.5 1.5 1.5 2 2 2 0-3.5.5-6 2.5-9Z' />
      <path d='M12 12c-1.5 1.5-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-.5-2-2-3.5Z' />
    </Icon>
  );
}
