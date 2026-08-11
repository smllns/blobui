import { Icon, type IconProps } from '../Icon';

export function AlertCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <path d='M12 8v4.5' />
      <circle cx='12' cy='16' r='0.5' />
    </Icon>
  );
}
