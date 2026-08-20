import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  TABS_CONTROLS,
  TABS_INITIAL_STATE,
  type TabsPlaygroundState,
} from './tabsConstants';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Tabs } from '@/components/tabs/Tabs';
import type { TabItem } from '@/components/tabs/tabs.types';
import { PANELS, SECTIONS } from './tabs.data';
import { CodeBlock } from '../components/CodeBlock';
import { generateTabsCode } from './generateTabsCode';

function buildItems(state: TabsPlaygroundState): TabItem[] {
  return SECTIONS.map((section, index) => ({
    value: section.value,
    label: section.label,
    icon: state.icons ? section.icon : undefined,
    content: state.panels ? PANELS[section.value] : undefined,
    disabled: state.disabled && index === SECTIONS.length - 1,
  }));
}

export function TabsPlayground() {
  const { state, update } = usePlaygroundState(TABS_INITIAL_STATE);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={TABS_CONTROLS}
        />
      }
      preview={
        <div className='w-full max-w-sm'>
          <Tabs
            aria-label='Workspace'
            items={buildItems(state)}
            orientation={state.orientation}
            size={state.size}
            activation={state.activation}
            block={state.block}
          />
        </div>
      }
      code={<CodeBlock code={generateTabsCode(state)} />}
    />
  );
}
