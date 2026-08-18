import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  accordionContentStyles,
  accordionIconStyles,
  accordionItemStyles,
  accordionStyles,
  triggerStyles,
} from './accordion.styles';
import type { AccordionProps } from './accordion.types';
import { AccordionContent } from './AccordionContent';
import { cn } from '@/lib/cn';
import { ChevronDown } from '@/ui/icons/ChevronDown';

export function Accordion(props: AccordionProps) {
  const { items, variant = 'default' } = props;

  const rootProps =
    props.type === 'multiple'
      ? {
          type: 'multiple' as const,
          defaultValue: props.defaultValue,
          value: props.value,
          onValueChange: props.onValueChange,
        }
      : {
          type: 'single' as const,
          collapsible: props.collapsible,
          defaultValue: props.defaultValue,
          value: props.value,
          onValueChange: props.onValueChange,
        };

  return (
    <AccordionPrimitive.Root
      {...rootProps}
      className={accordionStyles({ variant })}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className={accordionItemStyles}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              data-force={item.forceState}
              className={cn(triggerStyles({ variant }))}
            >
              <span>{item.title}</span>
              <ChevronDown className={accordionIconStyles} />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionContent className={accordionContentStyles}>
            {item.children}
          </AccordionContent>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
