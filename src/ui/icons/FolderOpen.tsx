import { Icon, type IconProps } from '../Icon';

export function FolderOpen(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 20V6a2 2 0 0 1 2-2h4l2.5 3H19a2 2 0 0 1 2 2v4' />
      <path d='M3 20 5.5 13h15.5l-2.5 7Z' />
    </Icon>
  );
}
