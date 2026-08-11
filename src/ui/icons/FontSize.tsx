import { Icon, type IconProps } from '../Icon';

export function FontSize(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 19 8 7l4 12' />
      <path d='M5 16h6' />
      <path d='M14.5 19 17 11l2.5 8' />
      <path d='M15.5 16.5h3' />
    </Icon>
  );
}
