import { Icon, type IconProps } from '../Icon';

export function Printer(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7 8V4h10v4' />
      <rect x='3' y='8' width='18' height='7' rx='2.5' />
      <rect x='7' y='15' width='10' height='6' rx='2' />
      <circle cx='17.5' cy='11.5' r='1.5' />
    </Icon>
  );
}
