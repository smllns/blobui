import { Icon, type IconProps } from '../Icon';

export function Scooter(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='5' cy='17.5' r='3' />
      <circle cx='19' cy='17.5' r='3' />
      <path d='M8 19.5h6.5l3-12.5H13.5' />
    </Icon>
  );
}
