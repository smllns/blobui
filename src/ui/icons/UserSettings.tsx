import { Icon, type IconProps } from '../Icon';

export function UserSettings(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='6.5' cy='9' r='2.5' />
      <path d='M2 18a4.5 4.5 0 0 1 9 0' />
      <path d='M17.5 10 21.5 12v5l-4 2-4-2v-5Z' />
      <circle cx='17.5' cy='14.5' r='1.5' />
    </Icon>
  );
}
