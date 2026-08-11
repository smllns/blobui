import { Icon, type IconProps } from '../Icon';

export function Pause(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='9' y1='5.5' x2='9' y2='18.5' />
      <line x1='15' y1='5.5' x2='15' y2='18.5' />
    </Icon>
  );
}
