# Crossmint - Coding Challenge

Use this package to become a master of the Megaverse, with this package you can easily create your favorite planets.
Just install it, import the key functions, only using the root matrix you can create your own Megaverse with the help of Franco Linares and Crosmint.

I will show you how..

# How to use

The `createMetaversePhase2` function will help you create your first Megaverse.

You need to pass it a Megaverse matrix, this can be obtained by using the `fetchCurrentGoal` function created by Crossmint space engineers. (Important: Be careful because the candidate_id is hardcoded).
If you don't want to use it, no problem, you can use the mocketed array provided by the package.

Relative Path: `src/phase2/__tests__/__mocks__/phase2.goal.ts`.

Code:

```
import { createMetaversePhase2, phase2 as matrix } from 'FrancoMegaverse';

createMetaversePhase2(matrix);
```

Congratulations on creating your first megaverse!!

If you don't want to install the package, no problem, use the unit tests, you can use them as a sandbox to test your megaversos!

# Test

To verify that the requests are correct, valid requests made to create the Megaverse were captured and used to create unit tests.

You can test your code with `npm test` or `yarn test`.

# Additional Information

Because the solution of the challenges are usually very similar, I thought it was a good idea to give a plus, create a package with typing and fully functional, so that anyone can generate their Megaverso helps interviewers to understand the type of candidate I am, I am interested in giving plus, think of corner cases and provide quality software.
And enjoy the process!

#### Phase 1

I solved the first phase by creating my own algorithm without relying on the endpoint goal, that's why I didn't use the same coordinate creation function.

#### Phase 2

My intention is to generate a clean and tidy code, one of the most important things in web development is to generate clean code, as it promotes collaboration and understanding between colleagues.

# TSDX User Guide

Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing libraries (not apps!) that can be published to NPM. If you’re looking to build a Node app, you could use `ts-node-dev`, plain `ts-node`, or simple `tsc`.

> If you’re new to TypeScript, checkout [this handy cheatsheet](https://devhints.io/typescript)

## Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.ts
.gitignore
package.json
README.md
tsconfig.json
```
