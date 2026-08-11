import { Icon, type IconProps } from '../Icon';

export function CameraOff(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='7' width='18' height='12' rx='2.5' />
      <path d='M9 7 10.5 4.5h3L15 7' />
      <circle cx='12' cy='13' r='3.5' />
      <path d='M4 4 20 20' />
    </Icon>
  );
}
