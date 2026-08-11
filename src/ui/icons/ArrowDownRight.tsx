import { Icon, type IconProps } from '../Icon';

export function ArrowDownRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 6.5 17.5 17.5' />
      <path d='M8.5 17.5h9v-9' />
    </Icon>
  );
}
