import { Icon, type IconProps } from '../Icon';

export function Road(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 3 4 21' />
      <path d='M15 3 20 21' />
      <line x1='12' y1='4.5' x2='12' y2='7.5' />
      <line x1='12' y1='11' x2='12' y2='14' />
      <line x1='12' y1='17.5' x2='12' y2='20.5' />
    </Icon>
  );
}
