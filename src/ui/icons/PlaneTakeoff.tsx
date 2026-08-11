import { Icon, type IconProps } from '../Icon';

export function PlaneTakeoff(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M20 7 7.5 11.5' />
      <path d='M7 3 15 8.5l-2.5 9.5' />
      <path d='M4 9 7.5 11.5 6 15.5' />
      <line x1='2.5' y1='21' x2='21.5' y2='21' />
    </Icon>
  );
}
