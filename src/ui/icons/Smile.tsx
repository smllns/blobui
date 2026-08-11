import { Icon, type IconProps } from '../Icon';

export function Smile(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="9.5" r="0.5" />
      <circle cx="15" cy="9.5" r="0.5" />
      <path d="M8 14a4.5 4.5 0 0 0 8 0" />
    </Icon>
  );
}
