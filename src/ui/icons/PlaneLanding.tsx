import { Icon, type IconProps } from '../Icon';

export function PlaneLanding(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M20 14 7.5 9.5' />
      <path d='M7 18 15 12.5l-2.5-9.5' />
      <path d='M4 12 7.5 9.5 6 5.5' />
      <line x1='2.5' y1='21' x2='21.5' y2='21' />
    </Icon>
  );
}
