import { Icon, type IconProps } from '../Icon';

export function Minimize(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 4v3.5a1.5 1.5 0 0 1-1.5 1.5H4' />
      <path d='M15 4v3.5a1.5 1.5 0 0 0 1.5 1.5H20' />
      <path d='M15 20v-3.5a1.5 1.5 0 0 1 1.5-1.5H20' />
      <path d='M9 20v-3.5a1.5 1.5 0 0 0-1.5-1.5H4' />
    </Icon>
  );
}
