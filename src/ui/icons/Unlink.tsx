import { Icon, type IconProps } from '../Icon';

export function Unlink(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M10 7H7a5 5 0 0 0 0 10h3' />
      <path d='M14 7h3a5 5 0 0 1 0 10h-3' />
      <line x1='9' y1='12' x2='10.5' y2='12' />
      <line x1='13.5' y1='12' x2='15' y2='12' />
    </Icon>
  );
}
