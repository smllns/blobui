import { Icon, type IconProps } from '../Icon';

export function Building(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3.5' y='3' width='9' height='18' rx='2' />
      <rect x='14' y='9' width='7' height='12' rx='2' />
      <rect x='6.5' y='6' width='3' height='3' rx='1' />
      <rect x='6.5' y='11' width='3' height='3' rx='1' />
      <rect x='16' y='12' width='3' height='3' rx='1' />
      <path d='M6.5 21v-4h3v4' />
    </Icon>
  );
}
