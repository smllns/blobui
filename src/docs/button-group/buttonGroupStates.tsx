import { ButtonGroup } from '@/components/button-group/ButtonGroup';
import { Button } from '@/components/button/Button';
import type { StateSpecimen } from '../components/docsPage.types';
const MEMBER = 'secondary' as const;

export const GROUP_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <ButtonGroup aria-label='Export'>
        <Button variant={MEMBER}>Copy link</Button>
        <Button variant={MEMBER}>Download</Button>
        <Button variant={MEMBER}>Share</Button>
      </ButtonGroup>
    ),
    note: 'a connected row of buttons sharing one visual group',
  },
  {
    name: 'hover',
    node: (
      <ButtonGroup aria-label='Export'>
        <Button variant={MEMBER}>Copy link</Button>
        <Button variant={MEMBER} forceState='hover'>
          Download
        </Button>
        <Button variant={MEMBER}>Share</Button>
      </ButtonGroup>
    ),
    note: 'the hovered button gets interaction feedback without breaking the group outline',
  },
  {
    name: 'focus · end',
    node: (
      <ButtonGroup aria-label='Export'>
        <Button variant={MEMBER}>Copy link</Button>
        <Button variant={MEMBER}>Download</Button>
        <Button variant={MEMBER} forceState='focus'>
          Share
        </Button>
      </ButtonGroup>
    ),
    note: 'the focused end button keeps the group’s outer corner radius',
  },
  {
    name: 'focus · middle',
    node: (
      <ButtonGroup aria-label='Export'>
        <Button variant={MEMBER}>Copy link</Button>
        <Button variant={MEMBER} forceState='focus'>
          Download
        </Button>
        <Button variant={MEMBER}>Share</Button>
      </ButtonGroup>
    ),
    note: 'the focused middle button stays square and remains visually connected to its neighbours',
  },
  {
    name: 'disabled',
    node: (
      <ButtonGroup disabled aria-label='Export'>
        <Button variant={MEMBER}>Copy link</Button>
        <Button variant={MEMBER}>Download</Button>
        <Button variant={MEMBER}>Share</Button>
      </ButtonGroup>
    ),
    note: 'the entire group is disabled and cannot be interacted with',
  },
  {
    name: 'loading',
    node: (
      <ButtonGroup loading aria-label='Export'>
        <Button loading variant={MEMBER}>
          Copy link
        </Button>
        <Button variant={MEMBER}>Download</Button>
        <Button variant={MEMBER}>Share</Button>
      </ButtonGroup>
    ),
    note: 'the active button shows a loading state while the group remains in place',
  },
];
