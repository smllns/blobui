import { Icon, type IconProps } from '../Icon';

export function ArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 4v16' />
      <path d='M5.5 13.5 12 20l6.5-6.5' />
    </Icon>
  );
}
