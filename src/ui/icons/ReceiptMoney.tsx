import { Icon, type IconProps } from '../Icon';

export function ReceiptMoney(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-3 2-3-2-3 2Z' />
      <path d='M14.5 7.5h-3a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-3' />
      <line x1='12' y1='6' x2='12' y2='17' />
    </Icon>
  );
}
