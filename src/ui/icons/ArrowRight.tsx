import { Icon, type IconProps } from '../Icon';

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 12h16' />
      <path d='M13.5 5.5 20 12l-6.5 6.5' />
    </Icon>
  );
}
