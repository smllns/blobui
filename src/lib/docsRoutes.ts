import { Home } from '../docs/pages/Home';
import { InputDocs } from '../docs/input/InputPage';
import { SelectDocs } from '../docs/select/SelectPage';
import { RadioDocs } from '../docs/radio/RadioPage';
import { SwitchDocs } from '../docs/switch/SwitchPage';
import { ToastDocs } from '../docs/toast/ToastPage';
import { DialogDocs } from '../docs/dialog/DialogPage';
import { PopoverDocs } from '../docs/popover/PopoverPage';
import { AccordionDocs } from '../docs/accordion/AccordionPage';
import { AvatarDocs } from '../docs/avatar/AvatarPage';
import { BadgeDocs } from '../docs/badge/BadgePage';
import { ButtonDocs } from '../docs/button/ButtonPage';
import { CardDocs } from '../docs/card/CardPage';
import { CheckboxDocs } from '../docs/checkbox/CheckboxPage';
import { DropdownMenuDocs } from '../docs/dropdown-menu/DropdownMenuPage';
import { TooltipDocs } from '../docs/tooltip/TooltipPage';
import { ButtonGroupDocs } from '../docs/button-group/ButtonGroupPage';
import { InputOtpDocs } from '../docs/input-otp/InputOtpPage';
import { HoverCardDocs } from '../docs/hover-card/HoverCardPage';
import { NavigationMenuDocs } from '../docs/navigation-menu/NavigationMenuPage';
import { ResizableDocs } from '../docs/resizable/ResizablePage';

export const docsRoutes = [
  { path: '/', element: Home, index: true },

  { path: 'button', element: ButtonDocs, index: false },
  { path: 'button-group', element: ButtonGroupDocs, index: false },
  { path: 'input', element: InputDocs, index: false },
  { path: 'input-otp', element: InputOtpDocs, index: false },
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
  { path: 'popover', element: PopoverDocs, index: false },
  { path: 'hover-card', element: HoverCardDocs, index: false },
  { path: 'navigation-menu', element: NavigationMenuDocs, index: false },
  { path: 'resizable', element: ResizableDocs, index: false },
];
