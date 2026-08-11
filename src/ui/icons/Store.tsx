import { Icon, type IconProps } from '../Icon';

export function Store(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3.5 9 6 4.5h12L20.5 9Z' />
      <path d='M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9' />
      <path d='M10 21v-4.5h4V21' />
    </Icon>
  );
}
