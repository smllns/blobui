import { Icon, type IconProps } from '../Icon';

export function Search(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='10.5' cy='10.5' r='6.5' />
      <path d='M15.4 15.4 20.8 20.8' />
    </Icon>
  );
}
