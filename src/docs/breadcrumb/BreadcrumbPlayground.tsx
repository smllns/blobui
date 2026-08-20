import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import type { BreadcrumbItem } from '@/components/breadcrumb/breadcrumb.types';
import { Home } from '@/ui/icons/Home';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  BREADCRUMB_CONTROLS,
  BREADCRUMB_INITIAL_STATE,
  BREADCRUMB_SEPARATOR_CHAR,
  type BreadcrumbPlaygroundState,
} from './breadcrumbConstants';
import { generateBreadcrumbCode } from './generateBreadcrumbCode';
import { trail } from './breadcrumb.data';

function buildTrail(state: BreadcrumbPlaygroundState): BreadcrumbItem[] {
  return trail.map((item, index) => ({
    ...item,
    icon: state.icon && index === 0 ? <Home /> : undefined,
    disabled: state.disabled && index === 1,
  }));
}

export function BreadcrumbPlayground() {
  const { state, update } = usePlaygroundState(BREADCRUMB_INITIAL_STATE);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={BREADCRUMB_CONTROLS}
        />
      }
      preview={
        <Breadcrumb
          items={buildTrail(state)}
          separator={
            state.separator === 'chevron'
              ? undefined
              : BREADCRUMB_SEPARATOR_CHAR[state.separator]
          }
          maxItems={state.collapse === 'off' ? 0 : Number(state.collapse)}
        />
      }
      code={<CodeBlock code={generateBreadcrumbCode(state)} />}
    />
  );
}
