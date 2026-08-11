import { Icon, type IconProps } from '../Icon';

export function FolderPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 8V6a2 2 0 0 1 2-2h4l2.5 3H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z' />
      <line x1='9' y1='13.5' x2='15' y2='13.5' />
      <line x1='12' y1='10.5' x2='12' y2='16.5' />
    </Icon>
  );
}
