import { Icon, type IconProps } from '../Icon';

export function Move(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 3v18' />
      <path d='M3 12h18' />
      <path d='M9 6 12 3l3 3' />
      <path d='M9 18 12 21l3-3' />
      <path d='M6 9 3 12l3 3' />
      <path d='M18 9 21 12l-3 3' />
    </Icon>
  );
}
