import { Icon, type IconProps } from '../Icon';

export function Box(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='9.5' width='16' height='11.5' rx='2' />
      <path d='M4 9.5 6.5 5h5v4.5' />
      <path d='M20 9.5 17.5 5h-5v4.5' />
    </Icon>
  );
}
