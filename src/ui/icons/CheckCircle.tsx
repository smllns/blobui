import { Icon, type IconProps } from '../Icon';

export function CheckCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <path d='M8.5 12.5 10.5 14.5 15.5 9.5' />
    </Icon>
  );
}
