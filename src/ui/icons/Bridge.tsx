import { Icon, type IconProps } from '../Icon';

export function Bridge(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='2.5' y1='6' x2='21.5' y2='6' />
      <line x1='2.5' y1='9.5' x2='21.5' y2='9.5' />
      <line x1='8' y1='6' x2='8' y2='9.5' />
      <line x1='16' y1='6' x2='16' y2='9.5' />
      <path d='M4.5 19.5V13a3.5 3.5 0 0 1 7 0v6.5' />
      <path d='M12.5 19.5V13a3.5 3.5 0 0 1 7 0v6.5' />
    </Icon>
  );
}
