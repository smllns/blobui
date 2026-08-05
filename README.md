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
- Tailwind CSS
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
