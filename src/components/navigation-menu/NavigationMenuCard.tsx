import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/cn';
import { useInNavigationMenu } from './navigation-menu.context';
import {
  navigationMenuCardDescriptionStyles,
  navigationMenuCardStyles,
  navigationMenuCardTitleStyles,
} from './navigation-menu.styles';
import type { NavigationMenuCardProps } from './navigation-menu.types';

export function NavigationMenuCard({
  icon,
  title,
  description,
  className,
  active,
  asChild,
  onSelect,
  ...props
}: NavigationMenuCardProps) {
  const inMenu = useInNavigationMenu();

  const body = (
    <>
      {icon}

      <span className={navigationMenuCardTitleStyles}>{title}</span>

      {description && (
        <span className={navigationMenuCardDescriptionStyles}>
          {description}
        </span>
      )}
    </>
  );

  const classes = cn(
    navigationMenuCardStyles({ withIcon: Boolean(icon) }),
    className,
  );

  if (!inMenu) {
    return (
      <a
        {...props}
        data-active={active ? '' : undefined}
        aria-current={active ? 'page' : undefined}
        className={classes}
      >
        {body}
      </a>
    );
  }

  return (
    <NavigationMenuPrimitive.Link
      {...props}
      asChild={asChild}
      onSelect={onSelect}
      active={active}
      className={classes}
    >
      {body}
    </NavigationMenuPrimitive.Link>
  );
}
