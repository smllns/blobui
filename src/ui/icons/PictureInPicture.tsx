import { Icon, type IconProps } from '../Icon';

export function PictureInPicture(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='5' width='18' height='14' rx='2.5' />
      <rect x='11.5' y='11' width='6' height='4.5' rx='1' />
    </Icon>
  );
}
