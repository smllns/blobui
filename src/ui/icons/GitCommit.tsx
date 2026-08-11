import { Icon, type IconProps } from '../Icon';

export function GitCommit(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='3' y1='12' x2='8.5' y2='12' />
      <circle cx='12' cy='12' r='3.5' />
      <line x1='15.5' y1='12' x2='21' y2='12' />
    </Icon>
  );
}
