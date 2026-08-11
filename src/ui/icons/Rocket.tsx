import { Icon, type IconProps } from '../Icon';

export function Rocket(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 2.5c3 3 4.5 6.5 4.5 10.5V17h-9v-4c0-4 1.5-7.5 4.5-10.5Z' />
      <circle cx='12' cy='9.5' r='1.5' />
      <path d='M7.5 12.5 4 16.5 5.5 20l2-3M16.5 12.5 20 16.5 18.5 20l-2-3' />
    </Icon>
  );
}
