import { Icon, type IconProps } from '../Icon';

export function Temperature(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9.5 14V6a2.5 2.5 0 0 1 5 0v8a4 4 0 1 1-5 0' />
      <path d='M12 10v7' />
      <path d='M17 7h1M17 10h1M17 13h1' />
    </Icon>
  );
}
