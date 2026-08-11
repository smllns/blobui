import { Icon, type IconProps } from '../Icon';

export function Ferry(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 16h18l-2.5 4.5h-13Z' />
      <rect x='4.5' y='11' width='15' height='5' rx='1.5' />
      <rect x='13' y='6.5' width='5' height='4.5' rx='1.5' />
    </Icon>
  );
}
