import { Icon, type IconProps } from '../Icon';

export function Fingerprint(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3.5 12a8.5 8.5 0 0 1 17 0v2' />
      <path d='M7 12a5 5 0 0 1 10 0v4.5' />
      <path d='M10.5 12a1.5 1.5 0 0 1 3 0v7' />
      <path d='M7 17.5v2' />
      <path d='M17 19.5v1' />
    </Icon>
  );
}
