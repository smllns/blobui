import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './docs/pages/Home';
import { ButtonDocs } from './docs/pages/Button';
import { DocsLayout } from './docs/layout/DocsLayout';
import { InputDocs } from './docs/pages/Input';
import { SelectDocs } from './docs/pages/Select';
import { CheckboxDocs } from './docs/pages/Checkbox';
import { TooltipDocs } from './docs/pages/Tooltip';
import { RadioDocs } from './docs/pages/Radio';
import { SwitchDocs } from './docs/pages/Switch';
import { BadgeDocs } from './docs/pages/Badge';
import { AvatarDocs } from './docs/pages/Avatar';
import { CardDocs } from './docs/pages/Card';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DocsLayout />}>
          <Route index element={<Home />} />
          <Route path='button' element={<ButtonDocs />} />
          <Route path='input' element={<InputDocs />} />
          <Route path='select' element={<SelectDocs />} />
          <Route path='checkbox' element={<CheckboxDocs />} />
          <Route path='radio' element={<RadioDocs />} />
          <Route path='switch' element={<SwitchDocs />} />
          <Route path='badge' element={<BadgeDocs />} />
          <Route path='avatar' element={<AvatarDocs />} />
          <Route path='card' element={<CardDocs />} />
          <Route path='tooltip' element={<TooltipDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
