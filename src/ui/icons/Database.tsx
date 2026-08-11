import { Icon, type IconProps } from '../Icon';

export function Database(props: IconProps) {
  return (
    <Icon {...props}>
      <ellipse cx='12' cy='6' rx='7' ry='3' />
      <path d='M5 6v12a7 3 0 0 0 14 0V6' />
      <path d='M5 12a7 3 0 0 0 14 0' />
    </Icon>
  );
}
