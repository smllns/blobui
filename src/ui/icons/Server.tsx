import { Icon, type IconProps } from '../Icon';

export function Server(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='7' rx='2.5' />
      <rect x='3' y='13' width='18' height='7' rx='2.5' />
      <circle cx='7' cy='7.5' r='0.5' />
      <circle cx='7' cy='16.5' r='0.5' />
    </Icon>
  );
}
