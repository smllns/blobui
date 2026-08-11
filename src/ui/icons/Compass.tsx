import { Icon, type IconProps } from '../Icon';

export function Compass(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <path d='M16.5 7.5 13.5 13.5 7.5 16.5 10.5 10.5Z' />
    </Icon>
  );
}
