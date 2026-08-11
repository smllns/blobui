import { Icon, type IconProps } from '../Icon';

export function ThermometerCold(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9.5 14V6a2.5 2.5 0 0 1 5 0v8a4 4 0 1 1-5 0' />
      <path d='M12 13v4' />
    </Icon>
  );
}
