import { Icon, type IconProps } from '../Icon';

export function Barcode(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3.5 5v14M6.5 5v14M10.5 5v14' />
      <path d='M13.5 5v14M17.5 5v14M20.5 5v14' />
    </Icon>
  );
}
