import { Icon, type IconProps } from '../Icon';

export function Snow(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 18h11a3 3 0 0 0 0-6 5.5 5.5 0 0 0-11 0 3 3 0 0 0 0 6Z" />
      <circle cx="8.5" cy="21.5" r="0.5" />
      <circle cx="12" cy="21.5" r="0.5" />
      <circle cx="15.5" cy="21.5" r="0.5" />
    </Icon>
  );
}
