import { Icon, type IconProps } from '../Icon';

export function PiggyBank(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8 8.5h8a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8a4.5 4.5 0 0 1 0-9Z' />
      <path d='M12 8.5 13.5 5 15 8.5' />
      <line x1='6.5' y1='11' x2='10' y2='11' />
      <circle cx='14' cy='12.5' r='1' />
      <path d='M8 17.5V20M15.5 17.5V20' />
    </Icon>
  );
}
