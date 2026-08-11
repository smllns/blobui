import { Icon, type IconProps } from '../Icon';

export function ChargingStation(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='3' width='12' height='17.5' rx='2' />
      <path d='M9 5.5 5 13h3.5l-.5 5.5L11.5 10.5H8.5Z' />
      <path d='M14.5 13h2.5a2 2 0 0 1 2 2v4' />
    </Icon>
  );
}
