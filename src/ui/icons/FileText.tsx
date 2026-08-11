import { Icon, type IconProps } from '../Icon';

export function FileText(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z' />
      <path d='M8.5 11.5h7M8.5 15h7M8.5 18.5h4' />
    </Icon>
  );
}
