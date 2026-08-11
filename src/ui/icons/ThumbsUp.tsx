import { Icon, type IconProps } from '../Icon';

export function ThumbsUp(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='10.5' width='5' height='10' rx='1.5' />
      <path d='M7.5 10.5 13 3a2 2 0 0 1 2 2.5L14 10h4.5a2 2 0 0 1 2 2.5l-1.5 8H7.5Z' />
    </Icon>
  );
}
