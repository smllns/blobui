import { Icon, type IconProps } from '../Icon';

export function Palette(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 3a9 9 0 1 0 4 17 2 2 0 0 0-1.5-3.5 2 2 0 0 1 1.5-3.5h1.5a4 4 0 0 0 3.5-4A9 9 0 0 0 12 3Z' />
      <circle cx='6.5' cy='11.5' r='1' />
      <circle cx='9.5' cy='7' r='1' />
      <circle cx='14.5' cy='7' r='1' />
    </Icon>
  );
}
