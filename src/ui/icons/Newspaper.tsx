import { Icon, type IconProps } from '../Icon';

export function Newspaper(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='16' rx='2.5' />
      <path d='M6.5 8h11' />
      <rect x='6.5' y='11' width='5' height='5.5' rx='1' />
      <path d='M14 11.5h3.5M14 14h3.5M14 16.5h3.5' />
    </Icon>
  );
}
