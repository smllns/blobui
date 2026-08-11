import { Icon, type IconProps } from '../Icon';

export function Fuel(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='3' width='12' height='17.5' rx='2' />
      <rect x='5' y='6' width='7' height='4' rx='1' />
      <path d='M14.5 13.5h5V8.5l-2-2' />
    </Icon>
  );
}
