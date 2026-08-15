import { ButtonGroup } from '../../components/button-group/ButtonGroup';
import { Button } from '../../components/button/Button';
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
    note: 'fill only — the perimeter belongs to the group, not to the member',
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
    note: 'rounded on the outer corners',
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
    note: 'square, and lifted above both neighbours',
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
    note: 'one attribute takes the whole row out of the tab order',
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
  },
];
