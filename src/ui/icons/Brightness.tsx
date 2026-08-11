import { Icon, type IconProps } from '../Icon';

export function Brightness(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='4' />
      <path d='M12 2.5v2.5M12 19v2.5M2.5 12h2.5M19 12h2.5' />
      <path d='M5.5 5.5 7 7M17 17 18.5 18.5M18.5 5.5 17 7M7 17 5.5 18.5' />
    </Icon>
  );
}
