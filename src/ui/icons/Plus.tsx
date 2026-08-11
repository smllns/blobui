import { Icon, type IconProps } from '../Icon';

export function Plus(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='5.5' y1='12' x2='18.5' y2='12' />
      <line x1='12' y1='5.5' x2='12' y2='18.5' />
    </Icon>
  );
}
