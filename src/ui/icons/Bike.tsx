import { Icon, type IconProps } from '../Icon';

export function Bike(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='6' cy='15.5' r='4' />
      <circle cx='18' cy='15.5' r='4' />
      <path d='M6 15.5 9.5 8h5l3.5 7.5' />
      <path d='M6 15.5h6L9.5 8' />
    </Icon>
  );
}
