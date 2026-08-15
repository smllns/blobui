import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/cn';
import { useInNavigationMenu } from './navigation-menu.context';
import {
  navigationMenuCardDescriptionStyles,
  navigationMenuCardTitleStyles,
  navigationMenuFeatureStyles,
} from './navigation-menu.styles';
import type { NavigationMenuFeatureProps } from './navigation-menu.types';

export function NavigationMenuFeature({
  icon,
  title,
  description,
  span = 'column',
  className,
  children,
  active,
  asChild,
  onSelect,
  ...props
}: NavigationMenuFeatureProps) {
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

      {children}
    </>
  );

  const classes = cn(navigationMenuFeatureStyles({ span }), className);

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
