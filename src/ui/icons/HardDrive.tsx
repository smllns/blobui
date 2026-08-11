import { Icon, type IconProps } from '../Icon';

export function HardDrive(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6 5h12l3 8v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Z' />
      <path d='M3 13h18' />
      <circle cx='6.5' cy='16' r='1.5' />
      <path d='M10.5 16h7' />
    </Icon>
  );
}
