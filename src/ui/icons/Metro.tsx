import { Icon, type IconProps } from '../Icon';

export function Metro(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 21v-8a9 9 0 0 1 18 0v8' />
      <rect x='6.5' y='9.5' width='11' height='9' rx='2' />
      <line x1='6.5' y1='13.5' x2='17.5' y2='13.5' />
      <circle cx='9.5' cy='16' r='1' />
      <circle cx='14.5' cy='16' r='1' />
    </Icon>
  );
}
