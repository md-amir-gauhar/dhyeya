# DHYEYA

A Bun workspace monorepo.

## Structure

```
DHYEYA/
├── apps/
│   ├── api/        # NestJS backend      (http://localhost:4000)
│   ├── landing/    # Next.js marketing   (http://localhost:3000)
│   └── web/        # React + Vite app    (http://localhost:5173)
└── packages/
    ├── shared/     # Shared types, constants, zod schemas
    └── tsconfig/   # Shared TypeScript configs
```

## Getting started

```bash
bun install
bun run build --filter @dhyeya/shared   # build shared package once
bun run dev                             # run every app in parallel
```

Run a single app:

```bash
bun run dev:api
bun run dev:landing
bun run dev:web
```

## Scripts

| Script              | Description                               |
| ------------------- | ----------------------------------------- |
| `bun run dev`       | Dev servers for every workspace           |
| `bun run build`     | Build every workspace (topological order) |
| `bun run lint`      | Lint every workspace                      |
| `bun run test`      | Test every workspace                      |
| `bun run typecheck` | Type-check every workspace                |
| `bun run format`    | Prettier across the repo                  |
| `bun run clean`     | Remove build output and `node_modules`    |

## Adding a new app or package

1. Create the folder under `apps/` or `packages/`.
2. Name the package `@dhyeya/<name>` in its `package.json`.
3. Extend a config from `@dhyeya/tsconfig`.
4. Run `bun install` to link it into the workspace.

## Environment

Each app ships a `.env.example`. Copy it to `.env` (or `.env.local` for Next.js) before running.
