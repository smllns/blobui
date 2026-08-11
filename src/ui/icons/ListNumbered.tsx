import { Icon, type IconProps } from '../Icon';

export function ListNumbered(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3.5 5.5 5.5 4.5V8' />
      <line x1='10' y1='6' x2='20' y2='6' />
      <path d='M3.5 10.5h3l-3 3.5h3' />
      <line x1='10' y1='12' x2='20' y2='12' />
      <path d='M3.5 16.5h3l-1.5 1.5h1.5V20h-3' />
      <line x1='10' y1='18' x2='20' y2='18' />
    </Icon>
  );
}
