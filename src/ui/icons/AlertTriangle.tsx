import { Icon, type IconProps } from '../Icon';

export function AlertTriangle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 3 21.5 20.5H2.5Z' />
      <path d='M12 9v4.5' />
      <circle cx='12' cy='17' r='0.5' />
    </Icon>
  );
}
