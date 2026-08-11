import { Icon, type IconProps } from '../Icon';

export function Gift(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='8' width='16' height='5' rx='2' />
      <path d='M5.5 13v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6' />
      <line x1='12' y1='8' x2='12' y2='21' />
      <path d='M12 8H10a2 2 0 1 1 2-2' />
      <path d='M12 8h2a2 2 0 1 0-2-2' />
    </Icon>
  );
}
