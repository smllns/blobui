import { Icon, type IconProps } from '../Icon';

export function HospitalPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18.5 10c0 4.5-6.5 11-6.5 11s-6.5-6.5-6.5-11a6.5 6.5 0 1 1 13 0Z' />
      <line x1='12' y1='6.5' x2='12' y2='13.5' />
      <line x1='8.5' y1='10' x2='15.5' y2='10' />
    </Icon>
  );
}
