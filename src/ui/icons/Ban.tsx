import { Icon, type IconProps } from '../Icon';

export function Ban(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </Icon>
  );
}
