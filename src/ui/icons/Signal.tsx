import { Icon, type IconProps } from '../Icon';

export function Signal(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='4.5' y1='20' x2='4.5' y2='16' />
      <line x1='9.5' y1='20' x2='9.5' y2='12.5' />
      <line x1='14.5' y1='20' x2='14.5' y2='9' />
      <line x1='19.5' y1='20' x2='19.5' y2='5.5' />
    </Icon>
  );
}
