# Development Setup for npm Package Testing

This setup allows you to test the published `@idealyst` npm packages while ensuring they work correctly with the Unistyles babel plugin.

## The Problem

The Unistyles babel plugin has an aggressive `isInsideNodeModules()` check that prevents processing of packages in the `node_modules` directory, even when using `autoProcessImports` or `autoProcessPaths` options.

## The Solution

We create a development-only `lib` directory structure that contains symbolic links (or copies) of the `@idealyst` packages outside of `node_modules`. This allows the babel plugin to process them correctly.

## Setup

1. **Install packages normally:**
   ```bash
   yarn install
   ```

2. **Run the development setup:**
   ```bash
   yarn setup:dev
   ```

This will create a `lib` directory with symbolic links to the `@idealyst` packages from `node_modules`.

3. **Start the development server:**
   ```bash
   yarn dev
   ```

## How It Works

- The `lib` directory is automatically created with symbolic links to the actual packages in `node_modules`
- The `vite.config.ts` aliases the `@idealyst` packages to use the `lib` directory instead of `node_modules`
- The babel plugin processes files from the `lib` directory (since it's outside `node_modules`)
- The `lib` directory is ignored by git (development-only)

## Benefits

- ✅ No changes to the installation process
- ✅ Tests the actual npm packages, not workspace versions
- ✅ Works around the babel plugin limitation
- ✅ Development-only solution (doesn't affect production)
- ✅ Uses symbolic links when possible (fast and efficient)
- ✅ Falls back to copying if symbolic links fail

## Notes

- The `lib` directory should not be committed to git
- Run `yarn setup:dev` again if you update the packages
- This is only needed for development/testing of the npm packages 