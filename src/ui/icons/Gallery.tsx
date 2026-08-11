import { Icon, type IconProps } from '../Icon';

export function Gallery(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7 6.5V5.5A2.5 2.5 0 0 1 9.5 3h9A2.5 2.5 0 0 1 21 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-1' />
      <rect x='3' y='6.5' width='14.5' height='14.5' rx='2.5' />
      <circle cx='7.5' cy='11' r='1.25' />
      <path d='M3.5 18.5 8 14l3.5 3.5' />
    </Icon>
  );
}
