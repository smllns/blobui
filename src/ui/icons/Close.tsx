import { Icon, type IconProps } from '../Icon';

export function Close(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='6.5' y1='6.5' x2='17.5' y2='17.5' />
      <line x1='17.5' y1='6.5' x2='6.5' y2='17.5' />
    </Icon>
  );
}
