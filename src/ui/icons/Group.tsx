import { Icon, type IconProps } from '../Icon';

export function Group(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 20a9 9 0 0 1 18 0' />
      <circle cx='12' cy='6.5' r='2.5' />
      <circle cx='5' cy='9' r='2' />
      <circle cx='19' cy='9' r='2' />
    </Icon>
  );
}
