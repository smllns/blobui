import { Icon, type IconProps } from '../Icon';

export function PlusCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <line x1='8.5' y1='12' x2='15.5' y2='12' />
      <line x1='12' y1='8.5' x2='12' y2='15.5' />
    </Icon>
  );
}
