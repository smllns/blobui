import { Icon, type IconProps } from '../Icon';

export function Crop(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6 2v14a2 2 0 0 0 2 2h14' />
      <path d='M2 6h14a2 2 0 0 1 2 2v14' />
    </Icon>
  );
}
