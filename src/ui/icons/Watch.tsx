import { Icon, type IconProps } from '../Icon';

export function Watch(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='5' />
      <path d='M9 8V3h6v5' />
      <path d='M9 16v5h6v-5' />
      <path d='M12 9.5V12h2' />
    </Icon>
  );
}
