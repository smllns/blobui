import { useState } from 'react';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { generateAccordionCode } from './generateAccordionCode';
import { Accordion } from '@/components/accordion/Accordion';
import {
  ACCORDION_CONTROLS,
  ACCORDION_INITIAL_STATE,
} from './accordionConstants';
import { AccordionItems } from './accordion.data';

export function AccordionPlayground() {
  const [state, setState] = useState(ACCORDION_INITIAL_STATE);
  const [openValue, setOpenValue] = useState<string | string[]>('item-1');
  const code = generateAccordionCode(state);

  const update = <K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === 'type') {
      setOpenValue(value === 'multiple' ? ['item-1'] : 'item-1');
    }

    if (key === 'disabledItem' && value) {
      setOpenValue((prev) => {
        if (Array.isArray(prev)) {
          return prev.filter((item) => item !== 'item-2');
        }

        return prev === 'item-2' ? '' : prev;
      });
    }
  };

  const controls = ACCORDION_CONTROLS.map((control) => {
    if (control.key === 'collapsible') {
      return {
        ...control,
        disabled: state.type === 'multiple',
      };
    }

    return control;
  });

  const accordionItems = AccordionItems.map((item) => ({
    ...item,
    disabled: state.disabledItem && item.value === 'item-2',
  }));

  const accordionProps =
    state.type === 'multiple'
      ? {
          items: accordionItems,
          variant: state.variant,
          type: 'multiple' as const,
          value: openValue as string[],
          onValueChange: setOpenValue,
        }
      : {
          items: accordionItems,
          variant: state.variant,
          type: 'single' as const,
          collapsible: state.collapsible,
          value: openValue as string,
          onValueChange: setOpenValue,
        };
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer state={state} update={update} controls={controls} />
      }
      preview={
        <div className='w-full max-w-md'>
          <Accordion {...accordionProps} />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
