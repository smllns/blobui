import { Icon, type IconProps } from '../Icon';

export function FilePlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z' />
      <line x1='9' y1='15' x2='15' y2='15' />
      <line x1='12' y1='12' x2='12' y2='18' />
    </Icon>
  );
}
