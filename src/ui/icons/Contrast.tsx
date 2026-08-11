import { Icon, type IconProps } from '../Icon';

export function Contrast(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <path d='M12 3v18' />
      <path d='M12 7a5 5 0 0 1 0 10' />
    </Icon>
  );
}
