import { DocsPage } from '../components/DocsPage';
import { TooltipPlayground } from '../components/playground/TooltipPlayground';
import { tooltipProps } from '../../lib/tooltipProps';
import { Tooltip } from '../../components/tooltip';
import { Button } from '../../components/button';

export function TooltipDocs() {
  return (
    <DocsPage
      header='Tooltip'
      description='A tooltip component for displaying additional information.'
      preview={
        <>
          <Tooltip content='Default tooltip' variant='default' side='top'>
            <Button>Top</Button>
          </Tooltip>

          <Tooltip content='Light tooltip' variant='light' side='right'>
            <Button>Right</Button>
          </Tooltip>

          <Tooltip content='Success tooltip' variant='success' side='bottom'>
            <Button>Bottom</Button>
          </Tooltip>

          <Tooltip
            content='Destructive tooltip'
            variant='destructive'
            side='left'
          >
            <Button>Left</Button>
          </Tooltip>
        </>
      }
      playground={<TooltipPlayground />}
      props={tooltipProps}
    />
  );
}
