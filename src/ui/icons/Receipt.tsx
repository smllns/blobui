import { Icon, type IconProps } from '../Icon';

export function Receipt(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-3 2-3-2-3 2Z' />
      <path d='M9.5 7.5h5M9.5 11.5h5' />
    </Icon>
  );
}
