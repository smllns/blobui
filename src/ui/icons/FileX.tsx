import { Icon, type IconProps } from '../Icon';

export function FileX(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z' />
      <line x1='9.5' y1='12.5' x2='14.5' y2='17.5' />
      <line x1='14.5' y1='12.5' x2='9.5' y2='17.5' />
    </Icon>
  );
}
