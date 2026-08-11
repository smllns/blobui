import { Icon, type IconProps } from '../Icon';

export function Type(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 8V5h14v3' />
      <line x1='12' y1='5' x2='12' y2='19' />
      <line x1='9' y1='19' x2='15' y2='19' />
    </Icon>
  );
}
