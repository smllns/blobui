import { Icon, type IconProps } from '../Icon';

export function XOctagon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8 2.5h8l5.5 5.5v8l-5.5 5.5H8l-5.5-5.5V8Z' />
      <line x1='9' y1='9' x2='15' y2='15' />
      <line x1='15' y1='9' x2='9' y2='15' />
    </Icon>
  );
}
