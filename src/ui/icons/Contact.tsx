import { Icon, type IconProps } from '../Icon';

export function Contact(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='3' width='17' height='18' rx='2.5' />
      <line x1='7.5' y1='3' x2='7.5' y2='21' />
      <circle cx='14.5' cy='9.5' r='2.5' />
      <path d='M10 18.5a4.5 4.5 0 0 1 9 0' />
    </Icon>
  );
}
