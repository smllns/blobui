import { Icon, type IconProps } from '../Icon';

export function FaceScan(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 8.5V5.5a2.5 2.5 0 0 1 2.5-2.5H8.5' />
      <path d='M15.5 3H18.5a2.5 2.5 0 0 1 2.5 2.5V8.5' />
      <path d='M21 15.5V18.5a2.5 2.5 0 0 1-2.5 2.5H15.5' />
      <path d='M8.5 21H5.5a2.5 2.5 0 0 1-2.5-2.5V15.5' />
      <line x1='9.5' y1='9.5' x2='9.5' y2='10.5' />
      <line x1='14.5' y1='9.5' x2='14.5' y2='10.5' />
      <path d='M9.5 14.5a3 3 0 0 0 5 0' />
    </Icon>
  );
}
