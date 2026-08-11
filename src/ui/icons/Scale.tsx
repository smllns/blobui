import { Icon, type IconProps } from '../Icon';

export function Scale(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='12' y1='4.5' x2='12' y2='19.5' />
      <line x1='8' y1='19.5' x2='16' y2='19.5' />
      <line x1='5.5' y1='7' x2='18.5' y2='7' />
      <path d='M3 13 5.5 7.5 8 13a2.5 2.5 0 0 1-5 0Z' />
      <path d='M16 13 18.5 7.5 21 13a2.5 2.5 0 0 1-5 0Z' />
    </Icon>
  );
}
