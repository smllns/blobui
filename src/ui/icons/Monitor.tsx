import { Icon, type IconProps } from '../Icon';

export function Monitor(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='12' rx='2.5' />
      <path d='M12 16v3.5M8 19.5h8' />
    </Icon>
  );
}
