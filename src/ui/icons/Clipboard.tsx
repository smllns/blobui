import { Icon, type IconProps } from '../Icon';

export function Clipboard(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='6' width='16' height='15' rx='2' />
      <path d='M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1' />
    </Icon>
  );
}
