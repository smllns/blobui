import { Icon, type IconProps } from '../Icon';

export function Upload(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='12' y1='3' x2='12' y2='14' />
      <path d='M7 8 12 3 17 8' />
      <path d='M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3' />
    </Icon>
  );
}
