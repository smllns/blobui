import { Icon, type IconProps } from '../Icon';

export function Workflow(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='3' width='7' height='7' rx='2' />
      <rect x='14' y='14' width='7' height='7' rx='2' />
      <path d='M10 6.5h4.5a3 3 0 0 1 3 3V14' />
    </Icon>
  );
}
