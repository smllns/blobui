import { Icon, type IconProps } from '../Icon';

export function Coins(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9.5 6.5a6 6 0 1 0 0 11' />
      <circle cx='14.5' cy='12' r='6' />
      <path d='M14.5 9v6' />
    </Icon>
  );
}
