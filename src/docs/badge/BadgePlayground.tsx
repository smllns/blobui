import { ArrowRight } from '@/ui/icons/ArrowRight';
import { Check } from '@/ui/icons/Check';
import { BADGE_CONTROLS, BADGE_INITIAL_STATE } from './badgeConstants';
import { generateBadgeCode } from './generateBadgeCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Badge } from '@/components/badge/Badge';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

export function BadgePlayground() {
  const { state, update } = usePlaygroundState(BADGE_INITIAL_STATE);
  const code = generateBadgeCode(state);
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={BADGE_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center '>
          <Badge
            tone={state.tone}
            emphasis={state.emphasis}
            shape={state.shape}
            size={state.size}
            dot={state.dot}
            leftIcon={state.leftIcon ? <Check /> : undefined}
            rightIcon={state.rightIcon ? <ArrowRight /> : undefined}
          >
            Badge
          </Badge>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
