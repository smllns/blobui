import { Icon, type IconProps } from '../Icon';

export function ThumbsDown(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='3.5' width='5' height='10' rx='1.5' />
      <path d='M7.5 13.5 13 21a2 2 0 0 0 2-2.5L14 14h4.5a2 2 0 0 0 2-2.5l-1.5-8H7.5Z' />
    </Icon>
  );
}
