import { Icon, type IconProps } from '../Icon';

export function Italic(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='10' y1='4' x2='18.5' y2='4' />
      <line x1='15' y1='4' x2='9' y2='20' />
      <line x1='5.5' y1='20' x2='14' y2='20' />
    </Icon>
  );
}
