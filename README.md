# Node.js - Ports & Adapters boilerplate

> Node.js, TypeScript, fp-ts

## Required global dependencies

- Node.js v16
- Yarn v1

## Up & Running

1. Install local dependencies:

```terminal
yarn
```

2. Tests (watch mode):

```terminal
yarn test:watch
```

## Scripts

| Script                        | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `yarn start`                  | Run production server                                         |
| `yarn dev`                    | Run dev server                                                |
| `yarn test`                   | Run unit and integration tests once (great to be used in CI)  |
| `yarn test:watch`             | Run unit tests in watch mode                                  |
| `yarn test:integration`       | Run integration tests once                                    |
| `yarn test:integration:watch` | Run integration tests in watch mode                           |
| `yarn lint`                   | Run linter                                                    |
| `yarn lint:fix`               | Fix lint errors                                               |
| `yarn type-check`             | TS typechecking                                               |
| `yarn prepare`                | Not suposed to be manually used. It's just to configure husky |
| `yarn build`                  | Generates production build                                    |
| `yarn ci`                     | Run lint, typechecking and tests (meant to be used in a CI)   |

## Tree structure

This project uses Hexagonal Architecture (Ports & Adapters) with Functional Programming.

```terminal
.
├── src
│   ├── adapters
│   ├── config
│   │   ├── tests
│   │   │   └── fixtures
│   │   └── module-alias.ts
│   ├── core
│   │   ├── types
│   │   └── use-cases
│   ├── ports
│   │   └── adapters
│   ├── index.ts
│   └── app.ts
├── environment.d.ts
├── jest.config.integration.js
└── jest.config.js
```

| Directory / File             | Description                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src`                        | All source code write in TypeScript must be in this directory                                                                  |
| `src/index.ts`               | Main entry point for initial configuration of the project. **Do not edit this file.** Start with `src/app.ts`.                 |
| `src/app.ts`                 | Project entry point. You can call your first `port` here and boot your providers that should start before your server.         |
| `src/adapters`               | Domain adapters. Any `port` that need to talk with some `core` function should pass by an `adapter`.                           |
| `src/config`                 | All configurations can live here.                                                                                              |
| `src/config/tests/fixtures`  | Helpers for using in tests.                                                                                                    |
| `src/config/module-alias.ts` | Module configurations for using `@/` instead of `../../` on dev, tests and production environments.                            |
| `src/core`                   | Pure domain implementations. `core` directory must **not know** any `port` or `adapter`, nor anything ouside `core` directory. |
| `src/core/types`             | Start point for modelling your app with TypeScript types.                                                                      |
| `src/core/use-cases`         | Here you can put your functions with business rules.                                                                           |
| `src/ports`                  | Anything with external world contact. When you need to access something on `core`, you must use an `adapter`.                  |
| `src/ports/adapters`         | Adapters for `ports`. E.g.: you might create a Database Adapter, to easily swap between databases.                             |
| `environment.d.ts`           | List of Environment Variables for TypeScript autocomplete                                                                      |
| `jest.config.integration.js` | Jest configuration file for integration tests                                                                                  |
| `jest.config.js`             | Main Jest configuration file                                                                                                   |

## Important usage information

### Environment Variables

You can use env vars by creating a `.env` file on the root of the project.
To document all used env vars, and get autocomplete when use `process.env.YOU_VAR`,
just put all your env vars on file `environment.d.ts`.

### Global import

All files and dirs inside `src` directory can be imported using `@/`.
Prefer using this way over local import (`../../`).

## License

MIT
