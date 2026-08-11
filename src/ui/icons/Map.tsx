import { Icon, type IconProps } from '../Icon';

export function Map(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 6.5 9.5 4v13.5L3 20Z' />
      <path d='M9.5 4 14.5 6.5v13.5L9.5 17.5' />
      <path d='M14.5 6.5 21 4v13.5L14.5 20' />
    </Icon>
  );
}
