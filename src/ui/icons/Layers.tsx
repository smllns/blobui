import { Icon, type IconProps } from '../Icon';

export function Layers(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 3.5 21 8 12 12.5 3 8Z' />
      <path d='M3 12 12 16.5 21 12' />
      <path d='M3 16 12 20.5 21 16' />
    </Icon>
  );
}
