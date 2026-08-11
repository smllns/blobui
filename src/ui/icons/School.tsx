import { Icon, type IconProps } from '../Icon';

export function School(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3.5' y='9.5' width='17' height='11.5' rx='2' />
      <path d='M7.5 9.5 12 6l4.5 3.5' />
      <path d='M12 6V3l4 1.5-4 1.5' />
      <rect x='5.5' y='12.5' width='3' height='3' rx='1' />
      <rect x='15.5' y='12.5' width='3' height='3' rx='1' />
      <path d='M10 21v-4.5h4V21' />
    </Icon>
  );
}
