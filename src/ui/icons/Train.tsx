import { Icon, type IconProps } from '../Icon';

export function Train(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 18V10.5a7 7 0 0 1 14 0V18Z' />
      <line x1='5' y1='13.5' x2='19' y2='13.5' />
      <circle cx='8.5' cy='15.5' r='1' />
      <circle cx='15.5' cy='15.5' r='1' />
      <path d='M8 18 6 21' />
      <path d='M16 18 18 21' />
    </Icon>
  );
}
