import { Icon, type IconProps } from '../Icon';

export function AvatarStack(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7.5 7.5A4.5 4.5 0 1 0 7.5 16.5' />
      <path d='M12.5 7.5A4.5 4.5 0 1 0 12.5 16.5' />
      <circle cx='16' cy='12' r='4.5' />
    </Icon>
  );
}
