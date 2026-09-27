# VHK Design System

[![npm](https://img.shields.io/npm/v/@dzanek309/vhk-design-system)](https://www.npmjs.com/package/@dzanek309/vhk-design-system)

A Vue 3 component library built directly from the VHK design system in Figma.

**[→ Browse the components in Storybook](https://dzanek309.github.io/vhk-design-system/)**

## About

Every component is implemented from the Figma source of truth and documented in
Storybook with live controls and interaction states. The published Storybook is the
primary deliverable. It is where components are explored and compared against the
design. The npm package exists so the library can actually be consumed.

## Stack

- **Vue 3** + **TypeScript**
- **Tailwind CSS 4**
- **Vite**
- **Storybook 10**
- **Vitest** + **Vue Test Utils**
- **ESLint** + **Prettier**

## Running locally

Requires Node 24 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm storybook      # http://localhost:6006
```

Other scripts: `pnpm dev` (playground), `pnpm test`, `pnpm lint`, `pnpm typecheck`,
`pnpm build`.

## Using the package

The package is published on [npm](https://www.npmjs.com/package/@dzanek309/vhk-design-system).

```bash
pnpm add @dzanek309/vhk-design-system
```

```ts
import { Button, Pill } from "@dzanek309/vhk-design-system";
import "@dzanek309/vhk-design-system/styles.css";
```

```vue
<Button purpose="primary" size="md" icon-left="plus">Add</Button>
<Pill purpose="blue-accent" variant="alternative">New</Pill>
```

Component prop types are exported too, e.g. `ButtonPurpose`, `PillSize`, `IconName`.

Vue `^3.5` is a peer dependency. Fonts are not bundled, install the
[Fontsource](https://fontsource.org/) packages you need (Bebas Neue, Inter, Hahmlet,
Libre Caslon Display).

## Releases

Releases are automated. [release-please](https://github.com/googleapis/release-please)
reads the Conventional Commit history, opens a release PR with the version bump and
changelog, and tags the release once that PR is merged. The same workflow then publishes
the tagged commit to npm, only after CI passes, via
[trusted publishing](https://docs.npmjs.com/trusted-publishers).
See [CHANGELOG.md](CHANGELOG.md) for the history.
