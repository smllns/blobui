import { Icon, type IconProps } from '../Icon';

export function Music(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 17.5V6l11-2v11.5' />
      <circle cx='6.5' cy='17.5' r='2.5' />
      <circle cx='17.5' cy='15.5' r='2.5' />
    </Icon>
  );
}
