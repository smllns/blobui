import { Icon, type IconProps } from '../Icon';

export function Home(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3.5 10.5 12 3.5l8.5 7V20.5h-17Z' />
      <path d='M9.5 20.5v-6h5v6' />
    </Icon>
  );
}
