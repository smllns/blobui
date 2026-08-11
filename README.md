# blobui

A customizable React component library powered by a component registry.

blobui provides beautifully designed, accessible, and reusable UI components that you can install directly into your project and fully customize.

Unlike traditional component libraries, blobui does not ship components as a dependency. Instead, components are copied into your codebase, giving you full ownership and control.

Inspired by the registry approach pioneered by tools like shadcn/ui.

## ✨ Features

- Copy components directly into your project
- Full component ownership and customization
- TypeScript-first
- Tailwind CSS support
- Accessible primitives powered by Radix UI
- Built-in animations
- Component registry system
- CLI-based installation
- No runtime dependency on blobui
- A three-layer design token system: two themes, four swappable accents, five
  responsive type breakpoints

---

# Design tokens

Components in this fork do not hold colors. They read a semantic token layer,
and that is what makes theme swapping, re-branding and a Figma port a change of
one file rather than a rewrite.

```
src/styles/palette.css   GENERATED primitives. 22 families x 25-950, OKLCH.
src/styles/tokens.css    Semantic layer + the light/dark mirror table.
src/styles/theme.css     Maps the semantic layer onto Tailwind's @theme.
src/styles/base.css      Page floor + the focus-ring utility.
src/index.css            Imports the four, in that order, after Tailwind.
```

| Layer         | Example                                                 | Who uses it             |
| ------------- | ------------------------------------------------------- | ----------------------- |
| **Primitive** | `--gray-300`, `--brand-600`, `--surface-900`            | Only the semantic layer |
| **Semantic**  | `--border-default`, `--primary-solid`, `--text-primary` | The theme bridge        |
| **Utility**   | `border-border`, `bg-primary`, `text-fg`                | Components              |
| **Component** | `--btn-h`, `--field-px`, `--sw-thumb`                   | One component each      |

**One rule holds the whole thing together:** nothing in `src/components/` names
a primitive. A component that writes `bg-blue-600` instead of `bg-primary` is a
component that breaks on the next accent swap and reads wrong in dark mode.

### The two attributes

`data-theme="dark"` on `<html>` re-points every semantic token at a different
step of the same palette. The palette itself never inverts — `gray-50` is the
lightest grey in both themes. The mapping is a table, not a formula:
`text-primary` moves 850 steps, `border-default` moves 400, `text-placeholder`
does not move at all.

`data-accent="violet | teal | orange"` re-points `--brand-*` at another family.
Because the semantic layer aliases `--brand-600` rather than `--blue-600`, every
button, focus ring, link and selected row follows. The two compose. Warm accents
also move the brand _decisions_ — fill toward the light end, ink to dark —
because a bright warm fill cannot carry white text at any usable saturation.

Both are wired to the sidebar controls in the docs app; flip them and watch a
component file change nothing.

### One naming note

Tailwind puts text and background colours in one namespace, so `--text-primary`
(ink) and `--primary-solid` (brand fill) would collide on the name `primary`.
Ink is exposed as `fg` (`text-fg`, `text-fg-secondary`); the brand role keeps
`primary` (`bg-primary`, `text-on-primary`). Nothing else is renamed.

`src/lib/cn.ts` extends tailwind-merge with this system's type scale. Without
it, tailwind-merge treats an unrecognised `text-*` as a colour and silently
deletes `text-fg` when `text-body-md` sits next to it.

## 🚀 Getting Started

### Install the CLI

```bash
npm install -g blobui
```

### Initialize your project

Inside your React project:

```bash
blobui init
```

This creates a `components.json` file that defines where blobui installs files.

Example:

```json
{
  "aliases": {
    "components": "src/components/ui",
    "lib": "src/lib",
    "hooks": "src/hooks"
  }
}
```

### Install a component

```bash
blobui add button
```

The CLI will:

- download component source files
- install required dependencies
- install registry dependencies
- place files according to your configuration

Example result:

```
src/
├── components/
│   └── ui/
│       └── button/
│           ├── Button.tsx
│           ├── button.styles.ts
│           └── button.types.ts
│
├── lib/
│   └── cn.ts
│
└── hooks/
    └── useAnimatedOpen.ts
```

You now own the component code and can modify it however you want.

---

# Components

blobui components are built with:

- React
- TypeScript
- Tailwind CSS, driven by the semantic token layer above
- Radix UI primitives
- GSAP animations

Available components:

- Button
- Input
- Select
- Dialog
- Dropdown Menu
- Accordion
- Toast
- Avatar
- Card
- Tooltip
- Switch
- Radio
- and more

To see available components:

```bash
blobui list
```

To inspect a component:

```bash
blobui view button
```

---

# Registry

blobui uses a registry system to store component metadata.

Each component contains:

- component information
- dependencies
- registry dependencies
- source file paths

Every component declares `theme` as a registry dependency, so `blobui add
button` also installs the four token files. A component copied without them has
no colours at all.

Example:

```json
{
  "name": "button",
  "type": "registry:ui",
  "dependencies": ["class-variance-authority"],
  "files": [
    {
      "path": "components/button/Button.tsx",
      "type": "component"
    }
  ]
}
```

The registry allows the CLI to fetch and install only the components you need.

---

# Repository Structure

This repository contains the complete blobui ecosystem:

```
blobui/
│
├── components/
│   └── UI component source files
│
├── registry/
│   └── Component metadata and registry definitions
│
├── cli/
│   └── Command-line interface
│
└── docs/
    └── Documentation and examples
```

## CLI

The blobui CLI is responsible for:

- initializing projects
- installing components
- removing components
- managing dependencies
- interacting with the registry

Available commands:

```bash
blobui init
blobui add <component>
blobui remove <component>
blobui list
blobui view <component>
blobui doctor
```

For CLI documentation, see:

`cli/README.md`

---

# Development

Clone the repository:

```bash
git clone https://github.com/smllns/blobui.git
```

Install dependencies:

```bash
npm install
```

Build the CLI:

```bash
npm run build
```

Link locally:

```bash
npm link
```

Test the CLI inside another project:

```bash
blobui add button
```

---

# Philosophy

blobui follows the idea that UI components should belong to the application using them.

Instead of installing a black-box component package:

```
node_modules/
└── blobui/
    └── Button
```

blobui gives you:

```
src/
└── components/
    └── Button.tsx
```

You can read it, modify it, extend it, and make it fit your project.

---

# License

MIT
