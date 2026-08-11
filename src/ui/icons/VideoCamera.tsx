import { Icon, type IconProps } from '../Icon';

export function VideoCamera(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='6' width='13' height='12' rx='2' />
      <path d='M16 10.5 21 7.5v9l-5-3Z' />
    </Icon>
  );
}
