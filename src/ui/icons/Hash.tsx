import { Icon, type IconProps } from '../Icon';

export function Hash(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='3.5' y1='9' x2='20.5' y2='9' />
      <line x1='3.5' y1='15' x2='20.5' y2='15' />
      <path d='M10 3.5 8.5 20.5' />
      <path d='M15.5 3.5 14 20.5' />
    </Icon>
  );
}
