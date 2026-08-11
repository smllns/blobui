import { Icon, type IconProps } from '../Icon';

export function Heading(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='7' y1='5' x2='7' y2='19' />
      <line x1='17' y1='5' x2='17' y2='19' />
      <line x1='7' y1='12' x2='17' y2='12' />
    </Icon>
  );
}
