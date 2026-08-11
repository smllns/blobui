import { Icon, type IconProps } from '../Icon';

export function ListOrdered(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M10 6h10' />
      <path d='M10 12h10' />
      <path d='M10 18h10' />
      <path d='M5 4.5v15' />
      <path d='M2.5 17 5 19.5 7.5 17' />
    </Icon>
  );
}
