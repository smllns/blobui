import { Icon, type IconProps } from '../Icon';

export function Settings(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 3 19.5 7.5v9L12 21 4.5 16.5v-9Z' />
      <circle cx='12' cy='12' r='3.5' />
    </Icon>
  );
}
