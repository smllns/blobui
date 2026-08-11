import { Icon, type IconProps } from '../Icon';

export function Tags(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 7h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9L4 12.5Z' />
      <circle cx='7.5' cy='12.5' r='1.5' />
      <path d='M12 5h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2' />
    </Icon>
  );
}
