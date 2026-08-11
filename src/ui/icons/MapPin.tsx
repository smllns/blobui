import { Icon, type IconProps } from '../Icon';

export function MapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18.5 10c0 4.5-6.5 11-6.5 11s-6.5-6.5-6.5-11a6.5 6.5 0 1 1 13 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}
