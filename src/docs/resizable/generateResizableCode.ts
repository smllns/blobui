import type { ResizablePlaygroundState } from './resizableConstants';

export function generateResizableCode(state: ResizablePlaygroundState) {
  return `
const panels = [
  {
    id: 'files',
    defaultSize: 30,
    minSize: 20,${state.collapsible ? "\n    collapsible: true,\n    collapsedSize: 0," : ''}
    children: <FileTree />,
  },
  {
    id: 'editor',
    minSize: 30,
    children: <Editor />,
  },
];

<Resizable
  panels={panels}
  orientation="${state.orientation}"${state.disabled ? '\n  disabled' : ''}
/>
`.trim();
}
