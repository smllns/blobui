import { Icon, type IconProps } from '../Icon';

export function Memory(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2' y='5' width='20' height='11' rx='2.5' />
      <path d='M7 9v3M12 9v3M17 9v3' />
      <path d='M7 16v3M12 16v3M17 16v3' />
    </Icon>
  );
}
