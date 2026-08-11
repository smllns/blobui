import { Icon, type IconProps } from '../Icon';

export function Indent(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='4' y1='6' x2='20' y2='6' />
      <line x1='10' y1='12' x2='20' y2='12' />
      <line x1='4' y1='18' x2='20' y2='18' />
      <path d='M4 9.5 6.5 12 4 14.5' />
    </Icon>
  );
}
