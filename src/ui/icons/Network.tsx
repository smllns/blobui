import { Icon, type IconProps } from '../Icon';

export function Network(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='5' r='3' />
      <circle cx='5' cy='19' r='3' />
      <circle cx='19' cy='19' r='3' />
      <path d='M12 8v4M5 16v-4h14v4' />
    </Icon>
  );
}
