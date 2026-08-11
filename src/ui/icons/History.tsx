import { Icon, type IconProps } from '../Icon';

export function History(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4.5 12a7.5 7.5 0 1 0 7.5-7.5' />
      <path d='M14.5 2 12 4.5l2.5 2.5' />
      <path d='M12 8.5v3.5h3' />
    </Icon>
  );
}
