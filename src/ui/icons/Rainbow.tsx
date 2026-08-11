import { Icon, type IconProps } from '../Icon';

export function Rainbow(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M2.5 17.5a9.5 9.5 0 0 1 19 0' />
      <path d='M6 17.5a6 6 0 0 1 12 0' />
      <path d='M9.5 17.5a2.5 2.5 0 0 1 5 0' />
    </Icon>
  );
}
