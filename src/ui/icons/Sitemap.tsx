import { Icon, type IconProps } from '../Icon';

export function Sitemap(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='9' y='3' width='6' height='5' rx='1' />
      <rect x='3' y='16' width='6' height='5' rx='1' />
      <rect x='15' y='16' width='6' height='5' rx='1' />
      <path d='M12 8v3.5H6V16' />
      <path d='M12 11.5h6V16' />
    </Icon>
  );
}
