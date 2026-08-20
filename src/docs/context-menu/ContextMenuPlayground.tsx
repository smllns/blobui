import {
  CONTEXT_MENU_CONTROLS,
  CONTEXT_MENU_INITIAL_STATE,
} from './contextMenuConstants';
import { generateContextMenuCode } from './generateContextMenuCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

import {
  ContextMenu,
  ContextMenuLabel,
  ContextMenuShortcut,
} from '@/components/context-menu/ContextMenu';
import {
  ContextMenuCheckboxItem,
  ContextMenuItem,
} from '@/components/context-menu/ContextMenuItem';
import { ContextMenuSeparator } from '@/components/context-menu/ContextMenuSeparator';
import { ContextMenuSub } from '@/components/context-menu/ContextMenuSub';

export function ContextMenuPlayground() {
  const { state, update } = usePlaygroundState(CONTEXT_MENU_INITIAL_STATE);
  const code = generateContextMenuCode(state);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={CONTEXT_MENU_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center'>
          <ContextMenu
            size={state.size}
            checkable={state.checkable}
            disabled={state.disabled}
            trigger={
              <div className='grid h-32 w-64 place-items-center rounded-xl border border-dashed border-border text-body-sm text-fg-tertiary select-none'>
                Right-click me
              </div>
            }
          >
            <ContextMenuLabel>Row</ContextMenuLabel>

            <ContextMenuItem>
              Rename
              <ContextMenuShortcut>F2</ContextMenuShortcut>
            </ContextMenuItem>

            {state.checkable && (
              <ContextMenuCheckboxItem checked>
                Show grid
              </ContextMenuCheckboxItem>
            )}

            <ContextMenuSub trigger='Move to'>
              <ContextMenuItem>Archive</ContextMenuItem>
              <ContextMenuItem>Drafts</ContextMenuItem>
            </ContextMenuSub>

            <ContextMenuSeparator />

            <ContextMenuItem variant='destructive'>Delete</ContextMenuItem>
          </ContextMenu>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
