import { Icon, type IconProps } from '../Icon';

export function Download(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='12' y1='3' x2='12' y2='14' />
      <path d='M7 9 12 14 17 9' />
      <path d='M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3' />
    </Icon>
  );
}
