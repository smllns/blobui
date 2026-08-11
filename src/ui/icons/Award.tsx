import { Icon, type IconProps } from '../Icon';

export function Award(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='9' r='5' />
      <path d='M9 13 7 21l5-2.5 5 2.5-2-8' />
    </Icon>
  );
}
