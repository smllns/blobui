import { Icon, type IconProps } from '../Icon';

export function Humidity(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M12 2.5c4 5 6.5 8 6.5 11.5a6.5 6.5 0 0 1-13 0C5.5 10.5 8 7.5 12 2.5Z' />
      <path d='M14.5 12 9.5 16.5' />
      <circle cx='10' cy='12.5' r='0.5' />
      <circle cx='14' cy='16' r='0.5' />
    </Icon>
  );
}
