import { DocsPage } from '../components/DocsPage';
import { TooltipPlayground } from './TooltipPlayground';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { Button } from '../../components/button/Button';
import { componentProps } from '@/lib/props';
import { previewTooltips } from './tooltip.data';
import { getInstallation } from '../utils/getInstallation';

export function TooltipDocs() {
  return (
    <DocsPage
      header='Tooltip'
      description='A tooltip component for displaying additional information.'
      preview={
        <>
          {previewTooltips.map((tooltip) => (
            <Tooltip key={tooltip.variant} {...tooltip}>
              <Button>{tooltip.side}</Button>
            </Tooltip>
          ))}
        </>
      }
      playground={<TooltipPlayground />}
      installation={getInstallation('tooltip')}
      props={componentProps.tooltip}
    />
  );
}
