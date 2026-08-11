import { Icon, type IconProps } from '../Icon';

export function Subtitles(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='5' width='18' height='14' rx='2.5' />
      <path d='M7 12h10M9 15.5h6' />
    </Icon>
  );
}
