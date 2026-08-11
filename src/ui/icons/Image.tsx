import { Icon, type IconProps } from '../Icon';

export function Image(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="8" cy="9" r="1.5" />
      <path d="M5 20 11.5 13.5 18 20" />
    </Icon>
  );
}
