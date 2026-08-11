import { Icon, type IconProps } from '../Icon';

export function Timer(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='13.5' r='8' />
      <path d='M9.5 2.5h5M12 2.5v3' />
      <path d='M12 8.5v5h3.5' />
    </Icon>
  );
}
