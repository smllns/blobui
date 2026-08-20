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
import { AlertDocs } from '../docs/alert/AlertPage';
import { BreadcrumbDocs } from '../docs/breadcrumb/BreadcrumbPage';
import { CollapsibleDocs } from '../docs/collapsible/CollapsiblePage';
import { EmptyDocs } from '../docs/empty/EmptyPage';
import { InputGroupDocs } from '../docs/input-group/InputGroupPage';
import { KbdDocs } from '../docs/kbd/KbdPage';
import { PaginationDocs } from '../docs/pagination/PaginationPage';
import { ProgressDocs } from '../docs/progress/ProgressPage';
import { SegmentedDocs } from '../docs/segmented/SegmentedPage';
import { SliderDocs } from '../docs/slider/SliderPage';
import { TabsDocs } from '../docs/tabs/TabsPage';
import { ToggleDocs } from '../docs/toggle/TogglePage';
import { AlertDialogDocs } from '../docs/alert-dialog/AlertDialogPage';
import { SheetDocs } from '../docs/sheet/SheetPage';
import { ContextMenuDocs } from '../docs/context-menu/ContextMenuPage';

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
  { path: 'toggle', element: ToggleDocs, index: false },
  { path: 'progress', element: ProgressDocs, index: false },
  { path: 'slider', element: SliderDocs, index: false },
  { path: 'breadcrumb', element: BreadcrumbDocs, index: false },
  { path: 'pagination', element: PaginationDocs, index: false },
  { path: 'kbd', element: KbdDocs, index: false },
  { path: 'alert', element: AlertDocs, index: false },
  { path: 'collapsible', element: CollapsibleDocs, index: false },
  { path: 'tabs', element: TabsDocs, index: false },
  { path: 'segmented', element: SegmentedDocs, index: false },
  { path: 'input-group', element: InputGroupDocs, index: false },
  { path: 'empty', element: EmptyDocs, index: false },
  { path: 'alert-dialog', element: AlertDialogDocs, index: false },
  { path: 'sheet', element: SheetDocs, index: false },
  { path: 'context-menu', element: ContextMenuDocs, index: false },
];
