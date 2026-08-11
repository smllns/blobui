import { Icon, type IconProps } from '../Icon';

export function Scissors(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="18" r="2.5" />
      <path d="M8 16 18.5 5" />
      <path d="M16 16 5.5 5" />
    </Icon>
  );
}
