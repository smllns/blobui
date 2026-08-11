import { Icon, type IconProps } from '../Icon';

export function Umbrella(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M2.5 12.5a9.5 9.5 0 0 1 19 0Z' />
      <path d='M12 12.5v6a2 2 0 0 1-4 0' />
    </Icon>
  );
}
