import { Icon, type IconProps } from '../Icon';

export function Handshake(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M2.5 16.5h3.5l3-3' />
      <path d='M21.5 7.5H18l-3 3' />
      <path d='M9 13.5a2.2 2.2 0 0 1 3.1 0l3.4 3.4a2.2 2.2 0 0 1-3.1 3.1l-3.4-3.4a2.2 2.2 0 0 1 0-3.1Z' />
      <path d='M12.5 10.5 15 13' />
    </Icon>
  );
}
