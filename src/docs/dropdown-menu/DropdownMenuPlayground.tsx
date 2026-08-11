import {
  DROPDOWN_MENU_INITIAL_STATE,
  DROPDOWN_MENU_CONTROLS,
} from './dropdownMenuConstants';
import { generateDropdownMenuCode } from './generateDropdownMenuCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { DropdownMenu } from '../../components/dropdown-menu/DropdownMenu';
import { DropdownMenuItem } from '../../components/dropdown-menu/DropdownMenuItem';
import { DropdownMenuSeparator } from '../../components/dropdown-menu/DropdownMenuSeparator';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

export function DropdownMenuPlayground() {
  const { state, update } = usePlaygroundState(DROPDOWN_MENU_INITIAL_STATE);
  const code = generateDropdownMenuCode(state);
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={DROPDOWN_MENU_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center gap-4'>
          <DropdownMenu
            variant={state.variant}
            size={state.size}
            side={state.side}
            trigger='Actions'
          >
            <DropdownMenuItem variant={state.itemVariant} size={state.itemSize}>
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem disabled={state.disabled}>
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem variant='destructive'>
              Delete account
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
