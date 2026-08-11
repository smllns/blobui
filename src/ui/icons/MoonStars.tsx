import { Icon, type IconProps } from '../Icon';

export function MoonStars(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18.5 14A7.5 7.5 0 1 1 10 5.5 6.5 6.5 0 0 0 18.5 14Z' />
      <path d='M19.5 4.5v2M18.5 5.5h2' />
      <circle cx='15' cy='3.5' r='0.5' />
    </Icon>
  );
}
