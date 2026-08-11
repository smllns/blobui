import { Icon, type IconProps } from '../Icon';

export function Tool(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M11 9 16 4a3 3 0 0 1 4 4l-5 5Z" />
      <path d="M13 11 4 20" />
    </Icon>
  );
}
