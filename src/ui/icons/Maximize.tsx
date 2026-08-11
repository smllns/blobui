import { Icon, type IconProps } from '../Icon';

export function Maximize(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 4H5.5A1.5 1.5 0 0 0 4 5.5V9' />
      <path d='M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9' />
      <path d='M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15' />
      <path d='M4 15v3.5a1.5 1.5 0 0 0 1.5 1.5H9' />
    </Icon>
  );
}
