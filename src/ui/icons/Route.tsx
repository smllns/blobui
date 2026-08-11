import { Icon, type IconProps } from '../Icon';

export function Route(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='5.5' cy='18.5' r='2.5' />
      <circle cx='18.5' cy='5.5' r='2.5' />
      <path d='M8 18.5h5.5a3.5 3.5 0 0 0 0-7h-3a3.5 3.5 0 0 1 0-6h5.5' />
    </Icon>
  );
}
