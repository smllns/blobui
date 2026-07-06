import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DocsLayout } from './docs/layout/DocsLayout';
import { docsRoutes } from './lib/docsRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DocsLayout />}>
          {docsRoutes.map(({ path, element: Element, index }) =>
            index ? (
              <Route key='index' index element={<Element />} />
            ) : (
              <Route key={path} path={path} element={<Element />} />
            ),
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
