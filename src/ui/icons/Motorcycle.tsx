import { Icon, type IconProps } from '../Icon';

export function Motorcycle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='5.5' cy='16' r='3.5' />
      <circle cx='18.5' cy='16' r='3.5' />
      <path d='M5.5 16h4l2-4h5' />
      <path d='M18.5 16 15.5 9h3.5' />
    </Icon>
  );
}
