import type { ReactNode } from 'react';
import type { CommonStylingVariant } from '@/components/shared/types';

interface AccordionItemProps {
  value: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
}

interface BaseAccordionProps {
  items: AccordionItemProps[];
  variant?: CommonStylingVariant;
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
