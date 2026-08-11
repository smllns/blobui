import { Icon, type IconProps } from '../Icon';

export function AlertOctagon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8 2.5h8l5.5 5.5v8l-5.5 5.5H8l-5.5-5.5V8Z' />
      <path d='M12 8v4.5' />
      <circle cx='12' cy='16' r='0.5' />
    </Icon>
  );
}
