import { Icon, type IconProps } from '../Icon';

export function Invoice(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z' />
      <path d='M14.5 8h-3a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-3' />
      <line x1='12' y1='6.5' x2='12' y2='17.5' />
    </Icon>
  );
}
