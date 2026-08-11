import { Icon, type IconProps } from '../Icon';

export function Bug(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8 8.5a4 4 0 0 1 8 0v4.5a4 4 0 0 1-8 0Z' />
      <path d='M9.5 5.5 8 3.5M14.5 5.5 16 3.5' />
      <path d='M8 10H4.5M16 10h3.5' />
      <path d='M8 13.5 5 16M16 13.5l3 2.5' />
      <path d='M9.5 16.5 8 19.5M14.5 16.5 16 19.5' />
    </Icon>
  );
}
