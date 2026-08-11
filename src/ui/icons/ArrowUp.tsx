import { Icon, type IconProps } from '../Icon';

export function ArrowUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 20V4' />
      <path d='M5.5 10.5 12 4l6.5 6.5' />
    </Icon>
  );
}
