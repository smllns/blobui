import { Icon, type IconProps } from '../Icon';

export function Mouse(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='6' y='2' width='12' height='20' rx='6' />
      <path d='M12 6v3' />
    </Icon>
  );
}
