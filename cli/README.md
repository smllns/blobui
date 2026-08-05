# blobui CLI

A CLI tool for installing [blobui](https://github.com/smllns/blobui) components into your React projects.

blobui works like a component registry: instead of installing a package with pre-built components, it copies the component source code directly into your project so you can fully customize it.

## Features

- Install individual components
- Automatically install component dependencies
- Install registry dependencies
- Configure project aliases
- Remove installed components
- Inspect available components
- Check project setup

## Installation

Install blobui CLI globally:

```bash
npm install -g blobui
```

Verify installation:

```bash
blobui --version
```

## Getting Started

Navigate to your React project:

```bash
cd your-project
```

Initialize blobui:

```bash
blobui init
```

This will create a `components.json` configuration file:

```json
{
  "aliases": {
    "components": "src/components/ui",
    "lib": "src/lib",
    "hooks": "src/hooks"
  }
}
```

The CLI uses these aliases to place installed files in your project.

## Commands

### Add a component

Install a component:

```bash
blobui add button
```

The CLI will:

- download component files
- install required npm dependencies
- install registry dependencies
- place files according to your configuration

Example:

```bash
blobui add dropdownMenu
```

Output:

```text
✔ components/dropdown-menu/DropdownMenu.tsx
✔ components/dropdown-menu/DropdownMenuItem.tsx
✔ lib/cn.ts
✔ hooks/useAnimatedOpen.ts

✨ Added dropdownMenu
```

### Overwrite existing components

By default, blobui asks before replacing existing files.

You can skip the prompt:

```bash
blobui add button --overwrite
```

---

### Remove a component

Remove an installed component:

```bash
blobui remove button
```

The CLI removes the component directory while keeping shared dependencies intact.

---

### List components

Show all available components:

```bash
blobui list
```

Example:

```text
Available components:

✓ button
✓ input
✓ dialog
✓ dropdownMenu
```

---

### View component information

Show component details:

```bash
blobui view button
```

Displays:

- component type
- npm dependencies
- registry dependencies
- installed files

---

### Check project setup

Run diagnostics:

```bash
blobui doctor
```

Checks:

- `components.json`
- `package.json`
- React installation
- Tailwind installation
- project structure

---

## Requirements

blobui works with:

- React
- TypeScript
- Tailwind CSS

Recommended setup:

- Node.js 20+
- npm 10+

## How it works

blobui does not ship compiled components.

Instead, it downloads source files into your project:

```
src/
├── components/
│   └── ui/
│       └── button/
│           ├── Button.tsx
│           ├── button.styles.ts
│           └── button.types.ts
│
├── hooks/
│   └── useAnimatedOpen.ts
│
└── lib/
    └── cn.ts
```

You own the code and can modify it however you want.

## Registry

Components are stored in the blobui registry.

Each component contains:

- source files
- dependencies
- registry dependencies
- metadata

Example registry item:

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

## Development

Clone the repository:

```bash
git clone https://github.com/smllns/blobui-cli.git
```

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Link locally:

```bash
npm link
```

Now you can use:

```bash
blobui
```

inside any local project.

## License

MIT
