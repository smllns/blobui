import { Icon, type IconProps } from '../Icon';

export function Loader(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M21 12a9 9 0 1 1-9-9' />
    </Icon>
  );
}
