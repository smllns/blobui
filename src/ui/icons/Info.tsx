import { Icon, type IconProps } from '../Icon';

export function Info(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='8' r='0.5' />
      <path d='M12 11.5v4.5' />
    </Icon>
  );
}
