# VHK Design System

A Vue 3 component library built directly from the VHK design system in Figma.

**[→ Browse the components in Storybook](https://dzanek309.github.io/vhk-design-system/)**

## About

Every component is implemented from the Figma source of truth and documented in
Storybook with live controls and interaction states. The published Storybook is the
primary deliverable. It is where components are explored and compared against the
design. The npm package exists so the library can actually be consumed.

Currently ships -> `Button`

## Design parity

The components are not "inspired by" the design. They are checked against it token by
token: colours and dimensions match the Figma component set exactly, verified by audit.

Where code and design deviate, it is deliberate and documented rather than silently
accepted. Two examples:

- Figma's `interaction` variant is not a prop — hover, pressed and focus are CSS states.
- Figma's `type` is called `purpose` in code, because `type` is a native `<button>` attribute.

## Stack

- **Vue 3** + **TypeScript**
- **Tailwind CSS 4** — design tokens as CSS variables, utilities in components
- **Vite** — library build and a dev playground
- **Storybook 10** — autodocs and pseudo-states
- **Vitest** + **Vue Test Utils**
- **ESLint** + **Prettier** — enforced in CI alongside type checks, tests and the build

## Running locally

Requires Node 22 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm storybook      # http://localhost:6006
```

Other scripts: `pnpm dev` (playground), `pnpm test`, `pnpm lint`, `pnpm typecheck`,
`pnpm build`.

## Using the package

```bash
pnpm add @dzanek309/vhk-design-system
```

```ts
import { Button } from "@dzanek309/vhk-design-system";
import "@dzanek309/vhk-design-system/styles.css";
```

```vue
<Button purpose="primary" size="md">Send</Button>
```

Vue `^3.5` is a peer dependency. Fonts are not bundled, install the
[Fontsource](https://fontsource.org/) packages you need (Bebas Neue, Inter, Hahmlet,
Libre Caslon Display).
