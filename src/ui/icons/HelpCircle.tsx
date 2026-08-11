import { Icon, type IconProps } from '../Icon';

export function HelpCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <path d='M9.5 9.5a2.5 2.5 0 1 1 2.5 3' />
      <circle cx='12' cy='16' r='0.5' />
    </Icon>
  );
}
