# {{projectName}}

{{description}}

## Getting Started

This is a shared library built with the Idealyst Framework that can be used across React Native and React web applications.

### Prerequisites

- Node.js 18+
- Yarn

### Installation

Install dependencies:
```bash
yarn install
```

### Development

Build the library:
```bash
yarn build
```

Watch for changes during development:
```bash
yarn dev
```

### Project Structure

```
{{projectName}}/
├── src/
│   ├── components/    # Shared components
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript types
│   └── index.ts       # Main export file
├── dist/              # Built library (generated)
├── rollup.config.js   # Build configuration
└── tsconfig.json      # TypeScript configuration
```

### Features

- **Cross-platform**: Works on both React Native and React web
- **TypeScript**: Full type safety
- **Tree-shakeable**: Optimized for bundle size
- **Peer Dependencies**: Lightweight by design
- **Idealyst Theme Integration**: Compatible with the Idealyst theming system

### Usage

After building, you can import and use the library in your projects:

```tsx
import { SharedComponent, toTitleCase, ComponentProps } from '{{packageName}}';

// Use the shared component
<SharedComponent 
  title="Hello World" 
  description="This works on both web and mobile!" 
/>

// Use utility functions
const formatted = toTitleCase('hello world'); // "Hello World"
```

### Building for Production

Build the library:
```bash
yarn build
```

This creates:
- `dist/index.js` - CommonJS build
- `dist/index.esm.js` - ES modules build
- `dist/index.d.ts` - TypeScript declarations

### Publishing

Before publishing, make sure to:

1. Update the version in `package.json`
2. Build the library: `yarn build`
3. Publish to npm: `npm publish`

### Development in Monorepo

If you're using this in a monorepo, you can reference it directly:

```json
{
  "dependencies": {
    "{{packageName}}": "workspace:*"
  }
}
```

### Learn More

- [Idealyst Framework Documentation](https://github.com/your-username/idealyst-framework)
- [React Native Documentation](https://reactnative.dev/)
- [React Documentation](https://react.dev/)
- [Rollup Documentation](https://rollupjs.org/) 