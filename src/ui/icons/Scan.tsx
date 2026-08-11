import { Icon, type IconProps } from '../Icon';

export function Scan(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8 3H5.5A2.5 2.5 0 0 0 3 5.5V8M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8' />
      <path d='M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16M16 21h2.5a2.5 2.5 0 0 0 2.5-2.5V16' />
      <path d='M3 12h18' />
    </Icon>
  );
}
