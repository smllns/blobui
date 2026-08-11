import { Icon, type IconProps } from '../Icon';

export function Archive(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='6' rx='2.5' />
      <path d='M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9' />
      <path d='M10 14.5h4' />
    </Icon>
  );
}
