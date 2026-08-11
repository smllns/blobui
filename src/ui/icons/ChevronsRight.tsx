import { Icon, type IconProps } from '../Icon';

export function ChevronsRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 7 10 12l-5 5' />
      <path d='M14 7 19 12l-5 5' />
    </Icon>
  );
}
