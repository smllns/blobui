import { Icon, type IconProps } from '../Icon';

export function Lightbulb(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 16a5.5 5.5 0 1 1 6 0' />
      <path d='M9.5 19h5' />
      <path d='M10.5 21.5h3' />
    </Icon>
  );
}
