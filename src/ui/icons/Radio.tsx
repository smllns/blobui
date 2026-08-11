import { Icon, type IconProps } from '../Icon';

export function Radio(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='8' width='18' height='12' rx='2.5' />
      <line x1='6.5' y1='8' x2='17.5' y2='3.5' />
      <circle cx='15.5' cy='14' r='2.5' />
      <path d='M6.5 11.5h3.5M6.5 16.5h3.5' />
    </Icon>
  );
}
