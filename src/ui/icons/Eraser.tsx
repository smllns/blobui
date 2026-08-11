import { Icon, type IconProps } from '../Icon';

export function Eraser(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M8.5 20.5 3.5 15.5a2 2 0 0 1 0-3l9-9a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-9 9Z' />
      <line x1='8' y1='8' x2='16' y2='16' />
    </Icon>
  );
}
