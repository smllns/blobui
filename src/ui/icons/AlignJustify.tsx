import { Icon, type IconProps } from '../Icon';

export function AlignJustify(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 6h16' />
      <path d='M4 12h16' />
      <path d='M4 18h16' />
    </Icon>
  );
}
