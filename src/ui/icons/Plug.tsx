import { Icon, type IconProps } from '../Icon';

export function Plug(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 2v5M15 2v5' />
      <path d='M6 7h12v3a6 6 0 0 1-12 0z' />
      <path d='M12 16v6' />
    </Icon>
  );
}
