import { Icon, type IconProps } from '../Icon';

export function ArrowLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M20 12H4' />
      <path d='M10.5 5.5 4 12l6.5 6.5' />
    </Icon>
  );
}
