import { Icon, type IconProps } from '../Icon';

export function SwapVertical(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7.5 19V6' />
      <path d='M4.5 9 7.5 6l3 3' />
      <path d='M16.5 5v13' />
      <path d='M13.5 15 16.5 18l3-3' />
    </Icon>
  );
}
