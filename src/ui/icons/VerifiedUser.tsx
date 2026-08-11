import { Icon, type IconProps } from '../Icon';

export function VerifiedUser(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='6.5' cy='9' r='2.5' />
      <path d='M2 18a4.5 4.5 0 0 1 9 0' />
      <circle cx='17.5' cy='14.5' r='4' />
      <path d='M16 14.5 17.5 16 19.5 14' />
    </Icon>
  );
}
