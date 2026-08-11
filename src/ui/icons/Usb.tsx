import { Icon, type IconProps } from '../Icon';

export function Usb(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 18V3' />
      <path d='M10 5.5 12 3l2 2.5' />
      <circle cx='12' cy='19.5' r='1.5' />
      <path d='M12 14 16 10M12 17 8 13' />
      <rect x='15' y='7' width='3' height='3' rx='1' />
      <circle cx='6.5' cy='11.5' r='1.5' />
    </Icon>
  );
}
