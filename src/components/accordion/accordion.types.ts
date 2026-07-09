import type { ReactNode } from 'react';

export type AccordionVariant = 'default' | 'outline' | 'ghost';

export interface AccordionItemProps {
  value: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
}

interface BaseAccordionProps {
  items: AccordionItemProps[];
  variant?: AccordionVariant;
}

interface SingleAccordionProps extends BaseAccordionProps {
  type?: 'single';
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface MultipleAccordionProps extends BaseAccordionProps {
  type: 'multiple';
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

export type AccordionProps = SingleAccordionProps | MultipleAccordionProps;
