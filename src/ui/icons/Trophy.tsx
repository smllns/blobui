import { Icon, type IconProps } from '../Icon';

export function Trophy(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7 3.5h10V9a5 5 0 0 1-10 0Z' />
      <path d='M7 5.5H4.5A3 3 0 0 0 7 10' />
      <path d='M17 5.5h2.5A3 3 0 0 1 17 10' />
      <path d='M12 14v6.5' />
      <path d='M8 20.5h8' />
    </Icon>
  );
}
