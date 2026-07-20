import { Home } from '../docs/pages/Home';
import { ButtonDocs } from '../docs/pages/Button';
import { InputDocs } from '../docs/pages/Input';
import { SelectDocs } from '../docs/pages/Select';
import { CheckboxDocs } from '../docs/pages/Checkbox';
import { RadioDocs } from '../docs/pages/Radio';
import { SwitchDocs } from '../docs/pages/Switch';
import { BadgeDocs } from '../docs/pages/Badge';
import { AvatarDocs } from '../docs/pages/Avatar';
import { CardDocs } from '../docs/pages/Card';
import { TooltipDocs } from '../docs/pages/Tooltip';
import { ToastDocs } from '../docs/pages/Toast';
import { DropdownMenuDocs } from '../docs/pages/DropdownMenu';
import { AccordionDocs } from '../docs/pages/Accordion';
import { DialogDocs } from '../docs/pages/Dialog';

export const docsRoutes = [
  { path: '/', element: Home, index: true },

  { path: 'button', element: ButtonDocs, index: false },
  { path: 'input', element: InputDocs, index: false },
  { path: 'select', element: SelectDocs, index: false },
  { path: 'checkbox', element: CheckboxDocs, index: false },
  { path: 'radio', element: RadioDocs, index: false },
  { path: 'switch', element: SwitchDocs, index: false },
  { path: 'badge', element: BadgeDocs, index: false },
  { path: 'avatar', element: AvatarDocs, index: false },
  { path: 'card', element: CardDocs, index: false },
  { path: 'tooltip', element: TooltipDocs, index: false },
  { path: 'toast', element: ToastDocs, index: false },
  { path: 'dropdown', element: DropdownMenuDocs, index: false },
  { path: 'accordion', element: AccordionDocs, index: false },
  { path: 'dialog', element: DialogDocs, index: false },
];
