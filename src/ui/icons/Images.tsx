import { Icon, type IconProps } from '../Icon';

export function Images(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M17 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2' />
      <rect x='7' y='7' width='14' height='14' rx='2' />
      <circle cx='11' cy='11.5' r='1.5' />
      <path d='M8 21 12.5 16.5 17 21' />
    </Icon>
  );
}
