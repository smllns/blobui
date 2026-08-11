import { Icon, type IconProps } from '../Icon';

export function ShieldAlert(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 3 20 6v5.5a11 11 0 0 1-8 9.5 11 11 0 0 1-8-9.5V6Z' />
      <line x1='12' y1='7' x2='12' y2='12' />
      <path d='M12 15h.01' />
    </Icon>
  );
}
