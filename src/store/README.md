# Store

## Why `redux-persist/es/storage` instead of `redux-persist/lib/storage`

The official redux-persist docs tell you to import storage like this:

```ts
import storage from "redux-persist/lib/storage";
```

That import **does not work in this project's Vite setup** — it throws at runtime:

```
TypeError: storage.setItem is not a function
TypeError: storage.getItem is not a function
```

### Root cause

`redux-persist@6` ships two builds:

- `lib/` — CommonJS, compiled by Babel with an `_interopRequireDefault` wrapper
- `es/` — native ES modules

Its `package.json` declares `"module": "es/index.js"` but has **no `exports` map**. When Vite resolves a subpath like `redux-persist/lib/storage`, it goes straight to the CJS file. The default export there is wrapped (`exports.default = ...` with `__esModule: true`), and in this Vite + React 19 + ESM setup the interop leaves `storage` as the module namespace object rather than the actual storage object — so `storage.setItem` and `storage.getItem` are `undefined`.

### The fix

Import from the ESM build directly:

```ts
import storage from "redux-persist/es/storage";
```

The `es/` build is a clean `export default createWebStorage('local')` — no interop wrapper, works in Vite out of the box.

### Alternatives we considered

- **Custom `localStorage` wrapper** — works, but adds a file to maintain just to replicate what `redux-persist/es/storage` already does.
- **`optimizeDeps.include: ["redux-persist/lib/storage"]` in `vite.config.ts`** — forces esbuild pre-bundling, which resolves the interop. Works, but hides the real issue in build config instead of fixing it at the import site.

We chose the ESM import because it's the smallest, most local change and matches what the package's own `"module"` field advertises.
