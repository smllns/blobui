import { Icon, type IconProps } from '../Icon';

export function Notebook(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='6' y='3' width='14' height='18' rx='2' />
      <path d='M3 7.5h6M3 12h6M3 16.5h6' />
    </Icon>
  );
}
